import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        card: "var(--card)",
        "card-border": "var(--card-border)",
        "text-muted": "var(--text-muted)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-in": "slideInRight 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s infinite",
        "gradient-x": "gradientX 15s ease infinite",
        "gradient-bg": "gradientBG 15s ease infinite",
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 15px 2px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
