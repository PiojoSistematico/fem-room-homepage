/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#ffffff",
        "primary-2": "#a1a1a1",
        "primary-3": "#454545",
        "primary-4": "#000000",
      },
      fontFamily: {
        LeagueSpartan: ["LeagueSpartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
