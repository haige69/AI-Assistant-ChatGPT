/* tslint:disable */
/* eslint-disable */
/**
 * sdapiv1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * StableDiffusionProcessingImg2Img
 * @export
 * @interface StableDiffusionProcessingImg2Img
 */
export interface StableDiffusionProcessingImg2Img {
    /**
     * Prompt
     * @type {string}
     * @memberof StableDiffusionProcessingImg2Img
     */
    prompt?: string;
    /**
     * Negative Prompt
     * @type {string}
     * @memberof StableDiffusionProcessingImg2Img
     */
    negativePrompt?: string;
    /**
     * Styles
     * @type {Array<string>}
     * @memberof StableDiffusionProcessingImg2Img
     */
    styles?: Array<string>;
    /**
     * Seed
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    seed?: number;
    /**
     * Subseed
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    subseed?: number;
    /**
     * Subseed Strength
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    subseedStrength?: number;
    /**
     * Seed Resize From H
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    seedResizeFromH?: number;
    /**
     * Seed Resize From W
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    seedResizeFromW?: number;
    /**
     * Sampler Name
     * @type {string}
     * @memberof StableDiffusionProcessingImg2Img
     */
    samplerName?: string;
    /**
     * Scheduler
     * @type {string}
     * @memberof StableDiffusionProcessingImg2Img
     */
    scheduler?: string;
    /**
     * Batch Size
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    batchSize?: number;
    /**
     * N Iter
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    nIter?: number;
    /**
     * Steps
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    steps?: number;
    /**
     * Cfg Scale
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    cfgScale?: number;
    /**
     * Width
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    width?: number;
    /**
     * Height
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    height?: number;
    /**
     * Restore Faces
     * @type {boolean}
     * @memberof StableDiffusionProcessingImg2Img
     */
    restoreFaces?: boolean;
    /**
     * Tiling
     * @type {boolean}
     * @memberof StableDiffusionProcessingImg2Img
     */
    tiling?: boolean;
    /**
     * Do Not Save Samples
     * @type {boolean}
     * @memberof StableDiffusionProcessingImg2Img
     */
    doNotSaveSamples?: boolean;
    /**
     * Do Not Save Grid
     * @type {boolean}
     * @memberof StableDiffusionProcessingImg2Img
     */
    doNotSaveGrid?: boolean;
    /**
     * Eta
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    eta?: number;
    /**
     * Denoising Strength
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    denoisingStrength?: number;
    /**
     * S Min Uncond
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    sMinUncond?: number;
    /**
     * S Churn
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    sChurn?: number;
    /**
     * S Tmax
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    sTmax?: number;
    /**
     * S Tmin
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    sTmin?: number;
    /**
     * S Noise
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    sNoise?: number;
    /**
     * Override Settings
     * @type {object}
     * @memberof StableDiffusionProcessingImg2Img
     */
    overrideSettings?: object;
    /**
     * Override Settings Restore Afterwards
     * @type {boolean}
     * @memberof StableDiffusionProcessingImg2Img
     */
    overrideSettingsRestoreAfterwards?: boolean;
    /**
     * Refiner Checkpoint
     * @type {string}
     * @memberof StableDiffusionProcessingImg2Img
     */
    refinerCheckpoint?: string;
    /**
     * Refiner Switch At
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    refinerSwitchAt?: number;
    /**
     * Disable Extra Networks
     * @type {boolean}
     * @memberof StableDiffusionProcessingImg2Img
     */
    disableExtraNetworks?: boolean;
    /**
     * Firstpass Image
     * @type {string}
     * @memberof StableDiffusionProcessingImg2Img
     */
    firstpassImage?: string;
    /**
     * Comments
     * @type {object}
     * @memberof StableDiffusionProcessingImg2Img
     */
    comments?: object;
    /**
     * Init Images
     * @type {Array<string>}
     * @memberof StableDiffusionProcessingImg2Img
     */
    initImages?: Array<string>;
    /**
     * Resize Mode
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    resizeMode?: number;
    /**
     * Image Cfg Scale
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    imageCfgScale?: number;
    /**
     * Mask
     * @type {string}
     * @memberof StableDiffusionProcessingImg2Img
     */
    mask?: string;
    /**
     * Mask Blur X
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    maskBlurX?: number;
    /**
     * Mask Blur Y
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    maskBlurY?: number;
    /**
     * Mask Blur
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    maskBlur?: number;
    /**
     * Mask Round
     * @type {boolean}
     * @memberof StableDiffusionProcessingImg2Img
     */
    maskRound?: boolean;
    /**
     * Inpainting Fill
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    inpaintingFill?: number;
    /**
     * Inpaint Full Res
     * @type {boolean}
     * @memberof StableDiffusionProcessingImg2Img
     */
    inpaintFullRes?: boolean;
    /**
     * Inpaint Full Res Padding
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    inpaintFullResPadding?: number;
    /**
     * Inpainting Mask Invert
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    inpaintingMaskInvert?: number;
    /**
     * Initial Noise Multiplier
     * @type {number}
     * @memberof StableDiffusionProcessingImg2Img
     */
    initialNoiseMultiplier?: number;
    /**
     * Latent Mask
     * @type {string}
     * @memberof StableDiffusionProcessingImg2Img
     */
    latentMask?: string;
    /**
     * Force Task Id
     * @type {string}
     * @memberof StableDiffusionProcessingImg2Img
     */
    forceTaskId?: string;
    /**
     * Sampler Index
     * @type {string}
     * @memberof StableDiffusionProcessingImg2Img
     */
    samplerIndex?: string;
    /**
     * Include Init Images
     * @type {boolean}
     * @memberof StableDiffusionProcessingImg2Img
     */
    includeInitImages?: boolean;
    /**
     * Script Name
     * @type {string}
     * @memberof StableDiffusionProcessingImg2Img
     */
    scriptName?: string;
    /**
     * Script Args
     * @type {Array<string>}
     * @memberof StableDiffusionProcessingImg2Img
     */
    scriptArgs?: Array<string>;
    /**
     * Send Images
     * @type {boolean}
     * @memberof StableDiffusionProcessingImg2Img
     */
    sendImages?: boolean;
    /**
     * Save Images
     * @type {boolean}
     * @memberof StableDiffusionProcessingImg2Img
     */
    saveImages?: boolean;
    /**
     * Alwayson Scripts
     * @type {object}
     * @memberof StableDiffusionProcessingImg2Img
     */
    alwaysonScripts?: object;
    /**
     * Infotext
     * @type {string}
     * @memberof StableDiffusionProcessingImg2Img
     */
    infotext?: string;
}

export function StableDiffusionProcessingImg2ImgFromJSON(json: any): StableDiffusionProcessingImg2Img {
    return StableDiffusionProcessingImg2ImgFromJSONTyped(json, false);
}

export function StableDiffusionProcessingImg2ImgFromJSONTyped(json: any, ignoreDiscriminator: boolean): StableDiffusionProcessingImg2Img {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'prompt': !exists(json, 'prompt') ? undefined : json['prompt'],
        'negativePrompt': !exists(json, 'negative_prompt') ? undefined : json['negative_prompt'],
        'styles': !exists(json, 'styles') ? undefined : json['styles'],
        'seed': !exists(json, 'seed') ? undefined : json['seed'],
        'subseed': !exists(json, 'subseed') ? undefined : json['subseed'],
        'subseedStrength': !exists(json, 'subseed_strength') ? undefined : json['subseed_strength'],
        'seedResizeFromH': !exists(json, 'seed_resize_from_h') ? undefined : json['seed_resize_from_h'],
        'seedResizeFromW': !exists(json, 'seed_resize_from_w') ? undefined : json['seed_resize_from_w'],
        'samplerName': !exists(json, 'sampler_name') ? undefined : json['sampler_name'],
        'scheduler': !exists(json, 'scheduler') ? undefined : json['scheduler'],
        'batchSize': !exists(json, 'batch_size') ? undefined : json['batch_size'],
        'nIter': !exists(json, 'n_iter') ? undefined : json['n_iter'],
        'steps': !exists(json, 'steps') ? undefined : json['steps'],
        'cfgScale': !exists(json, 'cfg_scale') ? undefined : json['cfg_scale'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'restoreFaces': !exists(json, 'restore_faces') ? undefined : json['restore_faces'],
        'tiling': !exists(json, 'tiling') ? undefined : json['tiling'],
        'doNotSaveSamples': !exists(json, 'do_not_save_samples') ? undefined : json['do_not_save_samples'],
        'doNotSaveGrid': !exists(json, 'do_not_save_grid') ? undefined : json['do_not_save_grid'],
        'eta': !exists(json, 'eta') ? undefined : json['eta'],
        'denoisingStrength': !exists(json, 'denoising_strength') ? undefined : json['denoising_strength'],
        'sMinUncond': !exists(json, 's_min_uncond') ? undefined : json['s_min_uncond'],
        'sChurn': !exists(json, 's_churn') ? undefined : json['s_churn'],
        'sTmax': !exists(json, 's_tmax') ? undefined : json['s_tmax'],
        'sTmin': !exists(json, 's_tmin') ? undefined : json['s_tmin'],
        'sNoise': !exists(json, 's_noise') ? undefined : json['s_noise'],
        'overrideSettings': !exists(json, 'override_settings') ? undefined : json['override_settings'],
        'overrideSettingsRestoreAfterwards': !exists(json, 'override_settings_restore_afterwards') ? undefined : json['override_settings_restore_afterwards'],
        'refinerCheckpoint': !exists(json, 'refiner_checkpoint') ? undefined : json['refiner_checkpoint'],
        'refinerSwitchAt': !exists(json, 'refiner_switch_at') ? undefined : json['refiner_switch_at'],
        'disableExtraNetworks': !exists(json, 'disable_extra_networks') ? undefined : json['disable_extra_networks'],
        'firstpassImage': !exists(json, 'firstpass_image') ? undefined : json['firstpass_image'],
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'initImages': !exists(json, 'init_images') ? undefined : json['init_images'],
        'resizeMode': !exists(json, 'resize_mode') ? undefined : json['resize_mode'],
        'imageCfgScale': !exists(json, 'image_cfg_scale') ? undefined : json['image_cfg_scale'],
        'mask': !exists(json, 'mask') ? undefined : json['mask'],
        'maskBlurX': !exists(json, 'mask_blur_x') ? undefined : json['mask_blur_x'],
        'maskBlurY': !exists(json, 'mask_blur_y') ? undefined : json['mask_blur_y'],
        'maskBlur': !exists(json, 'mask_blur') ? undefined : json['mask_blur'],
        'maskRound': !exists(json, 'mask_round') ? undefined : json['mask_round'],
        'inpaintingFill': !exists(json, 'inpainting_fill') ? undefined : json['inpainting_fill'],
        'inpaintFullRes': !exists(json, 'inpaint_full_res') ? undefined : json['inpaint_full_res'],
        'inpaintFullResPadding': !exists(json, 'inpaint_full_res_padding') ? undefined : json['inpaint_full_res_padding'],
        'inpaintingMaskInvert': !exists(json, 'inpainting_mask_invert') ? undefined : json['inpainting_mask_invert'],
        'initialNoiseMultiplier': !exists(json, 'initial_noise_multiplier') ? undefined : json['initial_noise_multiplier'],
        'latentMask': !exists(json, 'latent_mask') ? undefined : json['latent_mask'],
        'forceTaskId': !exists(json, 'force_task_id') ? undefined : json['force_task_id'],
        'samplerIndex': !exists(json, 'sampler_index') ? undefined : json['sampler_index'],
        'includeInitImages': !exists(json, 'include_init_images') ? undefined : json['include_init_images'],
        'scriptName': !exists(json, 'script_name') ? undefined : json['script_name'],
        'scriptArgs': !exists(json, 'script_args') ? undefined : json['script_args'],
        'sendImages': !exists(json, 'send_images') ? undefined : json['send_images'],
        'saveImages': !exists(json, 'save_images') ? undefined : json['save_images'],
        'alwaysonScripts': !exists(json, 'alwayson_scripts') ? undefined : json['alwayson_scripts'],
        'infotext': !exists(json, 'infotext') ? undefined : json['infotext'],
    };
}

export function StableDiffusionProcessingImg2ImgToJSON(value?: StableDiffusionProcessingImg2Img | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'prompt': value.prompt,
        'negative_prompt': value.negativePrompt,
        'styles': value.styles,
        'seed': value.seed,
        'subseed': value.subseed,
        'subseed_strength': value.subseedStrength,
        'seed_resize_from_h': value.seedResizeFromH,
        'seed_resize_from_w': value.seedResizeFromW,
        'sampler_name': value.samplerName,
        'scheduler': value.scheduler,
        'batch_size': value.batchSize,
        'n_iter': value.nIter,
        'steps': value.steps,
        'cfg_scale': value.cfgScale,
        'width': value.width,
        'height': value.height,
        'restore_faces': value.restoreFaces,
        'tiling': value.tiling,
        'do_not_save_samples': value.doNotSaveSamples,
        'do_not_save_grid': value.doNotSaveGrid,
        'eta': value.eta,
        'denoising_strength': value.denoisingStrength,
        's_min_uncond': value.sMinUncond,
        's_churn': value.sChurn,
        's_tmax': value.sTmax,
        's_tmin': value.sTmin,
        's_noise': value.sNoise,
        'override_settings': value.overrideSettings,
        'override_settings_restore_afterwards': value.overrideSettingsRestoreAfterwards,
        'refiner_checkpoint': value.refinerCheckpoint,
        'refiner_switch_at': value.refinerSwitchAt,
        'disable_extra_networks': value.disableExtraNetworks,
        'firstpass_image': value.firstpassImage,
        'comments': value.comments,
        'init_images': value.initImages,
        'resize_mode': value.resizeMode,
        'image_cfg_scale': value.imageCfgScale,
        'mask': value.mask,
        'mask_blur_x': value.maskBlurX,
        'mask_blur_y': value.maskBlurY,
        'mask_blur': value.maskBlur,
        'mask_round': value.maskRound,
        'inpainting_fill': value.inpaintingFill,
        'inpaint_full_res': value.inpaintFullRes,
        'inpaint_full_res_padding': value.inpaintFullResPadding,
        'inpainting_mask_invert': value.inpaintingMaskInvert,
        'initial_noise_multiplier': value.initialNoiseMultiplier,
        'latent_mask': value.latentMask,
        'force_task_id': value.forceTaskId,
        'sampler_index': value.samplerIndex,
        'include_init_images': value.includeInitImages,
        'script_name': value.scriptName,
        'script_args': value.scriptArgs,
        'send_images': value.sendImages,
        'save_images': value.saveImages,
        'alwayson_scripts': value.alwaysonScripts,
        'infotext': value.infotext,
    };
}


