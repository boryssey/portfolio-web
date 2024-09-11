/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        
        return config;
    },
    images: {
        remotePatterns: [
            {   
                protocol: 'https',
                hostname: 'd26gnvwaf4fni9.cloudfront.net'
            }
        ]
    }
};
import withBundleAnalyzer from "@next/bundle-analyzer";
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default bundleAnalyzer(nextConfig);
