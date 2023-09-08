/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tableHead: "#eceef2",
        darkRow: "#f9fafc",
        hotRed: "rgba(255, 99, 132, 1)",
        hotBlue: "rgba(54, 162, 235, 1)",
      },
    },
  },
  plugins: [],
};
