/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // пропускаем type-check на билде
  },
};
module.exports = nextConfig;
