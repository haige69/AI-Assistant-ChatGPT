/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 开启静态导出模式
  // 可选：如果使用图片优化等动态功能，可能需要禁用
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;
