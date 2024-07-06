/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXTAUTH_URL: "http://localhost:3000",
        GEMINI_API_KEY: "AIzaSyCZC8Ez9Lco-fiF729WBFL0chNz08HQ5FY",
        GOOGLE_CLIENT_ID: '1047132897236-9euq8p7rs27mkop4gbrusrm2tfir7viq.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET: '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',
        SECRET: 'asndasdaspdadm'
    },
    webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

export default nextConfig;
