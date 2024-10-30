/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  env: {
    BACK_URL: process.env.BACK_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mypfback-nsuw.onrender.com',
        port: '',
        pathname: '/uploads/default/**',
      },
    ],
  },
};

export default nextConfig;
