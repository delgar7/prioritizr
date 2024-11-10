/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                primary: "#F9F9F9",
            },
            colors: {
                darkBackground: "#202937",
                darkHeading: "#384252",
                darkText: "#E6E7EB",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
