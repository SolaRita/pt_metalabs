/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#ffd4ff",
        withe: "#ffffff",
        grey: "#bcbcbc",
        cyan: "#3aaad9",
        background: {
          DEFAULT: "#0A0B14",
          300: "#211626",
          200: "#1C141E",
          100: "#322638",
        },
        accent: {
          DEFAULT: "#7855dc",
          300: "#9478E3",
        },
        body: "#333333",
      },
    },
  },
  plugins: [],
};
