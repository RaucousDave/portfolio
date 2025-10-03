/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f1117",
        primary: "#02cc82",
        secondary: "#00e0ff",
        neutral: "#fff",
        surface: "hsl(0, 0%, 40%)",
      },
    },
  },
  plugins: [],
};
