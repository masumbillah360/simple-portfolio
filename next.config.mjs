import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: true,
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'styles')],
    // },
    images: {
        remotePatterns: [
            {
                hostname: 'res.cloudinary.com',
                protocol: 'https',
            },
            {
                hostname: 'media.dev.to',
                protocol: 'https',
            },
        ],
    },
};

export default nextConfig;
