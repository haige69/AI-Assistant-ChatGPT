import { reloadTopic } from "@/components/Chat/MessageList";
import { ChatContext, ChatManagement } from "@/core/ChatManagement";
import { CtxRole, Message } from "@/Models/DataBase";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { TopicMessage } from "./../Models/Topic";
import { aiServices } from "./AiService/ServiceProvider";
import { getUuid, scrollToBotton } from "./utils";

export function useScreenSize() {
  const [obj, setObj] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const timeout = useRef<any>();
  const retrieved = useRef(false);
  useEffect(() => {
    if (retrieved.current) return;
    retrieved.current = true;
    setObj({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", () => {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        setObj({ width: window.innerWidth, height: window.innerHeight });
      }, 1000);
    });
  }, []);
  return obj;
}
export function useDark() {
  const [obj, setObj] = useState(false);
  const retrieved = useRef(false);
  useEffect(() => {
    if (retrieved.current) return;
    retrieved.current = true;
    setObj(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").onchange = function () {
        setObj(window.matchMedia("(prefers-color-scheme: dark)").matches);
      };
    }
  }, []);

  return obj;
}

export const env: "dev" | "prod" =
  process.env.NEXT_PUBLIC_DOMAIN_ENV === "production" ? "prod" : "dev";

// 整理idx之后的message的timestamp的值, 并获取一个可以使用的值，因为这个值用于排序用，如果前后顺序相同时，需要将后一个+0.01 并且需要递归只到最后一个或者与下一个不一样为止
export function useReloadIndex(chat: ChatManagement) {
  const reloadIndex = useCallback(
    (topic: TopicMessage, idx: number) => {
      if (idx + 1 >= topic.messages.length) return;
      if (idx < 0) return;
      if (topic.messages[idx].timestamp > topic.messages[idx + 1].timestamp)
        return;
      topic.messages[idx + 1].timestamp = topic.messages[idx].timestamp + 0.001;
      chat.pushMessage(topic.messages[idx + 1]);
      reloadIndex(topic, idx + 1);
    },
    [chat]
  );
  return {
    reloadIndex,
  };
}

export const loadingMessages: { [key: string]: boolean } = {};
export function useSendMessage(chat: ChatManagement) {
  const { loadingMsgs } = useContext(ChatContext);
  const { reloadIndex } = useReloadIndex(chat);
  const sendMessage = useCallback(
    async (idx: number, topic: TopicMessage) => {
      const aiService = aiServices.current;
      if (!aiService) return;
      if (idx > topic.messages.length) return;
      let time = Date.now();
      if (idx < 0 && idx < topic.messages.length)
        time = topic.messages[0].timestamp - 1;
      if (idx >= 0 && idx < topic.messages.length)
        time = topic.messages[idx].timestamp + 0.001;
      let result: Message = {
        id: getUuid(),
        groupId: chat.group.id,
        ctxRole: "assistant",
        text: "loading...",
        timestamp: time,
        topicId: topic.id,
      };
      if (
        topic.messages
          .slice(Math.max(0, idx - chat.gptConfig.msgCount), idx)
          .findIndex((f) => loadingMessages[f.id]) != -1
      )
        return;
      loadingMessages[result.id] = true;

      let isFirst = true;
      aiService.sendMessage({
        msg: topic.messages[idx],
        context: chat.getAskContext(topic, idx),
        onMessage(res) {
          if (!topic) return;
          if (!topic.cloudTopicId && res.cloud_topic_id) {
            topic.cloudTopicId = res.cloud_topic_id;
            result.cloudTopicId = res.cloud_topic_id;
            chat.saveTopic(topic.id, topic.name, res.cloud_topic_id);
          }
          result.text = res.text + (res.end ? "" : "\n\nloading...");
          result.cloudMsgId = res.cloud_result_id || result.cloudMsgId;
          reloadTopic(topic.id, result.id);
          loadingMsgs[result.id] = {
            stop: res.stop,
          };
          chat.pushMessage(result, idx + 1).then((r) => {
            result = r;
            if (isFirst) {
              isFirst = false;
              reloadIndex(topic, idx);
              reloadTopic(topic.id, idx + 1);
              scrollToBotton(result.id);
            }
          });
          if (res.end) {
            delete loadingMsgs[result.id];
            delete loadingMessages[result.id];
            scrollToBotton(result.id);
          }
        },
        config: {
          channel_id: chat.config.cloudChannelId,
          ...chat.gptConfig,
          user: "user",
          messages: [],
        },
      });
    },
    [chat, reloadIndex, loadingMsgs]
  );
  return { sendMessage };
}

export function usePushMessage(chat: ChatManagement) {
  const { sendMessage } = useSendMessage(chat);
  const { reloadIndex } = useReloadIndex(chat);
  const { getHistory } = useGetHistory(chat);
  const pushMessage = useCallback(
    async function (
      text: string,
      idx: number,
      topic: TopicMessage,
      role: [CtxRole, boolean],
      pushCallback: (msg: Message) => void
    ) {
      if (idx < 0) return;
      text = text.trim();
      const aiService = aiServices.current;
      if (!text && !aiService?.customContext && aiService?.history) {
        await getHistory(topic);
        return;
      }
      const skipRequest = !role[1];
      text = ChatManagement.parseText(text);
      let time = Date.now();
      if (idx == 0 && idx + 1 < topic.messages.length)
        time = topic.messages[idx + 1].timestamp - 1;
      if (idx > 0 && idx < topic.messages.length)
        time = topic.messages[idx - 1].timestamp + 0.001;
      let msg: Message = {
        id: "",
        groupId: chat.group.id,
        ctxRole: role[0],
        text: text,
        timestamp: time,
        topicId: topic.id,
        cloudTopicId: topic.cloudTopicId,
      };
      await chat.pushMessage(msg, idx);
      if (msg.id) {
        reloadIndex(topic, idx);
        reloadTopic(topic.id, idx);
      }
      pushCallback(msg);
      if (skipRequest) return;
      sendMessage(idx, topic);
    },
    [chat, reloadIndex, sendMessage, getHistory]
  );
  return { pushMessage };
}

export function useGetHistory(chat: ChatManagement) {
  const getHistory = useCallback(
    async function (topic: TopicMessage) {
      const aiService = aiServices.current;
      let now = Date.now();
      if (aiService?.history && topic.cloudTopicId) {
        // 获取历史记录
        let oldTs: string = "0";
        if (topic.messages.length) {
          for (let index = topic.messages.length - 1; index >= 0; index--) {
            const item = topic.messages[index];
            if (item.cloudMsgId) {
              oldTs = item.cloudMsgId;
              break;
            }
          }
        }
        await aiService.history({
          async onMessage(text, isAi, cloudId, err) {
            if (!topic) return;
            await chat.pushMessage({
              id: "",
              groupId: chat.group.id,
              ctxRole: isAi ? "assistant" : "user",
              text: text,
              timestamp: now++,
              topicId: topic.id,
              cloudTopicId: topic.cloudTopicId,
              cloudMsgId: cloudId,
            });
          },
          lastMsgCloudId: oldTs,
          topicCloudId: topic.cloudTopicId,
          config: {
            channel_id: chat.config.cloudChannelId,
            ...chat.gptConfig,
            user: "user",
            messages: [],
          },
        });
        reloadTopic(topic.id);
      }
    },
    [chat]
  );
  return { getHistory };
}
