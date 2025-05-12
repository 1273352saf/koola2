// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // إذا كنت تستخدم صورًا من نطاقات خارجية (domains) غير نطاقك،
    // ستحتاج إلى إضافتها هنا. بما أن صورك محلية في /public، هذا ليس ضروريًا الآن.
    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: 'https',
    //       hostname: 'example.com',
    //       port: '',
    //       pathname: '/images/**',
    //     },
    //   ],
    // },
  };
  
  export default nextConfig;