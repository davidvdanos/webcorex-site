/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',  // Enables static exports
    images: {
        unoptimized: true, // Required for static export
    },
    // This setting is needed for GitHub Pages
    basePath: process.env.NODE_ENV === 'production' ? '/webcorex-site' : '',
    trailingSlash: true,
};

module.exports = nextConfig; 