/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#090909",
        "surface-1": "#141414",
        "surface-2": "#1c1c1c",
        hairline: "#262626",
        "hairline-soft": "#1a1a1a",
        primary: "#ffffff",
        "on-primary": "#000000",
        "accent-blue": "#0099ff",
        ink: "#ffffff",
        "ink-muted": "#999999",
        "gradient-magenta": "#d44df0",
        "gradient-violet": "#6a4cf5",
        "gradient-orange": "#ff7a3d",
        "gradient-coral": "#ff5577",
      },
      fontFamily: {
        display: ["'Mona Sans'", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "15px",
        xl: "20px",
        xxl: "30px",
        pill: "100px",
      },
    },
  },
  plugins: [],
};
