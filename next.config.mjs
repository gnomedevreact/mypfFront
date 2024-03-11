/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  env: {
    BACK_URL: process.env.BACK_URL,
  },
};

export default nextConfig;
