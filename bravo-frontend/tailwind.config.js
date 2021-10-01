const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            emerald: colors.emerald,
            yellow: colors.yellow,
        },
        extend: {},
    },
    variants: {
        extend: {
            borderRadius: ['hover', 'focus'],
        }
    },
    plugins: [],
}
