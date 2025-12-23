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
        // Primary - Deep cosmic purple/blue
        cosmic: {
          DEFAULT: "#1a1a2e",
          light: "#16213e",
          dark: "#0f0f1a",
        },
        // Accent - Celestial gold
        gold: {
          DEFAULT: "#d4af37",
          light: "#f4d160",
          dark: "#b8942e",
        },
        // Secondary - Mystic purple
        mystic: {
          DEFAULT: "#6c5ce7",
          light: "#9b8cf7",
          dark: "#5641d4",
        },
        // Backgrounds
        background: "#0a0a14",
        surface: {
          DEFAULT: "#1a1a2e",
          light: "#252542",
        },
        // Text
        text: {
          primary: "#F5F5F5",
          secondary: "#B0B0B0",
          muted: "#6B6B6B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "cosmic-gradient": "linear-gradient(to bottom, #1a1a2e, #16213e, #0f0f1a)",
        "gold-gradient": "linear-gradient(135deg, #d4af37, #f4d160)",
        "stars": "radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a14 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

