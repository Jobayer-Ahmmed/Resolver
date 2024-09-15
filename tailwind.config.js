/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
        },
        container: {
            center: true,
            padding: "8rem",
        },
    },
    plugins: [],
};
