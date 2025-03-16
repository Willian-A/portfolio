import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  output: "standalone",
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "app");
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
