import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: 'nebula-sync-robotics-web-site' // remove this in development 
};

export default nextConfig;
