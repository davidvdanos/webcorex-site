/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',  // Enables static exports
    images: {
        unoptimized: true, // Required for static export
    },
};

module.exports = nextConfig; 