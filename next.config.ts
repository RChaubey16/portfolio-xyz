import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.modules = [
      path.resolve(__dirname, "node_modules"),
      "node_modules",
    ];
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "icon.icepanel.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.streamlinehq.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tanstack.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shadcnstudio.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
