/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tableHead: "#eceef2",
        darkRow: "#f9fafc",
      },
    },
  },
  plugins: [],
};
