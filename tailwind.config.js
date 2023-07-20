/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                spartan: ["League Spartan", "sans-serif"],
            },
            colors: {
                white: "hsl(0, 0%, 100%)",
                black: "hsl(0, 0%, 0%)",
                gray: "hsl(0, 0%, 63%)",
                darkGray: "hsl(0, 0%, 27%)",
            },
        },
    },
    plugins: [],
};
