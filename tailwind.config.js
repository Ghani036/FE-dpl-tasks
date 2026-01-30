/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    500: '#6366f1',
                    600: '#4f46e5',
                },
            },
            fontFamily: {
                sans: ['Avenir', 'Avenir Next', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                premium: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
                glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            },
        },
    },
    plugins: [],
}
