/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '35': '35rem',
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
  },
  container: {
    center: true,
    padding: "8rem",
},
  },
  plugins: [],
}
}
    