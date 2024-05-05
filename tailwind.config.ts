import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                "on": "on-anim 0.6s ease-in-out forwards 0.3s",
                "on-1": "on-anim-1 0.6s ease-in-out forwards 0.6s",
                "on-2": "on-anim-2 0.6s ease-in-out forwards 0.9s",
                "on-3": "on-anim-3 0.6s ease-in-out forwards 1.2s",
                "on-4": "on-anim-4 0.6s ease-in-out forwards 1.5s",
            },
            keyframes: {
                'on-anim': {
                    '0%': { opacity: "0" },
                    '100%': { opacity: "90%" },
                },
                'on-anim-1': {
                    '0%': { opacity: "0" },
                    '100%': { opacity: "40%" },
                },
                'on-anim-2': {
                    '0%': { opacity: "0" },
                    '100%': { opacity: "20%" },
                },
                'on-anim-3': {
                    '0%': { opacity: "0" },
                    '100%': { opacity: "10%" },
                },
                'on-anim-4': {
                    '0%': { opacity: "0" },
                    '100%': { opacity: "5%" },
                }
            }
        },
    },
    plugins: [],
};
export default config;
