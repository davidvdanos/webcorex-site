/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',  // Enables static exports
    images: {
        unoptimized: true, // Required for static export
    },
    // Remove basePath since we're using a custom domain now
    // basePath: process.env.NODE_ENV === 'production' ? '/webcorex-site' : '',
    trailingSlash: true,
};

module.exports = nextConfig; 