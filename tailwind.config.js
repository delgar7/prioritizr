/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                primary: "#F9F9F9",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
