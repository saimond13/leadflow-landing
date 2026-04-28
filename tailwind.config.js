/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0c1929",
        surface: "#132034",
        "surface-2": "#1a2b42",
        "text-primary": "#f0f0f6",
        "text-secondary": "#8898a8",
        "text-tertiary": "#4a5f72",
        accent: "#e8b84b",
        "accent-dark": "#c49a30",
        "accent-dim": "rgba(232,184,75,0.12)",
      },
      fontFamily: {
        serif: ["Barlow Condensed", "Georgia", "serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shine: "shine 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shine: {
          "0%": { left: "-100%" },
          "50%, 100%": { left: "150%" },
        },
      },
    },
  },
  plugins: [],
}
