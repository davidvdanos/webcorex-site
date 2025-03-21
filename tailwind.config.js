/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1A2B49',    // Deep navy blue
                secondary: '#4E6C99',  // Softer blue
                accent: '#D4AF37',     // Rich gold
                light: '#F8F9FB',      // Light background
                dark: '#0F172A',       // Dark text color
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
} 