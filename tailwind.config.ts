import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#E8810A",
        "bg-base": "#0f0e0d",
        "surface": "#191816",
        "border-subtle": "#272522",
        "text-primary": "#ede9e1",
        "text-muted": "#6b6760",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
