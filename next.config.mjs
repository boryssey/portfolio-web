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

export default nextConfig;
