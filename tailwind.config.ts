import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Wedding Color Palette
        crimson: {
          DEFAULT: "#881337",
          deep: "#4C0519",
          vibrant: "#BE123C",
          light: "#FFE4E6",
        },
        rani: {
          DEFAULT: "#BE185D",
          vibrant: "#E11D48",
          dark: "#831843",
          light: "#FCE7F3",
        },
        marigold: {
          DEFAULT: "#F59E0B",
          vibrant: "#FFAA00",
          deep: "#D97706",
          light: "#FEF3C7",
        },
        haldi: {
          DEFAULT: "#FBBF24",
          bright: "#FDE047",
          warm: "#D97706",
        },
        peacock: {
          DEFAULT: "#0F766E",
          deep: "#115E59",
          dark: "#042F2E",
          light: "#CCFBF1",
        },
        emerald: {
          DEFAULT: "#065F46",
          deep: "#064E3B",
          vibrant: "#059669",
        },
        royalvelvet: {
          DEFAULT: "#3B0764",
          deep: "#2E0854",
          light: "#581C87",
        },
        gold: {
          DEFAULT: "#D4AF37",
          metallic: "#FFD700",
          antique: "#B8860B",
          zari: "#E5C158",
          light: "#FDF4DC",
          dark: "#8A6D1C",
        },
        ivory: {
          DEFAULT: "#FFFDF9",
          warm: "#FDF8F0",
          cream: "#FAF0E6",
        },
        charcoal: {
          DEFAULT: "#1F1513",
          soft: "#2C1E1B",
          deep: "#120B0A",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Cinzel", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        script: ["var(--font-pinyon)", "Pinyon Script", "Alex Brush", "cursive"],
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.08) translate(-1%, -1%)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        zariGleam: {
          "0%, 100%": { opacity: "0.6", filter: "brightness(1)" },
          "50%": { opacity: "1", filter: "brightness(1.3)" },
        },
      },
      animation: {
        kenburns: "kenburns 28s ease-in-out infinite alternate",
        "spin-slow": "spinSlow 45s linear infinite",
        float: "float 6s ease-in-out infinite",
        "zari-gleam": "zariGleam 3s ease-in-out infinite",
      },
      letterSpacing: {
        widest: "0.25em",
        luxury: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
