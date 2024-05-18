/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "info-black-1": "#020103",
        "info-black-2": "#1A1A1A",
        "info-purple-1": "#504CFF",
        "info-purple-2": "#854CFF",
      },
      boxShadow: {
        "5xl": "0 35px 60px -15px rgba(0, 0, 0)",
      },
      backgroundImage: {
        linear: "url('./assets/homebgimage.png')",
      },
      fontFamily: {
        audiowise: ["Audiowide", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "info-purple-1": "2px 2px 25px 2px #854CFF80",
      },
    },
  },
  plugins: [],
};
