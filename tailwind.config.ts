import type { Config } from "tailwindcss";

export default {
  // darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tt_interphases: ["var(--font-tt-interphases-pro)"],
        vcr: ["var(--font-vcr-osd-mono)"],
        tt_interphases_mono: ["var(--font-tt-interphases-pro-mono)"],
      },
      colors: {
        bg: {
          primary: "#010101",
          900: "#09090B",
          600: "#353537",
          500: "#636262",
          400: "#CFCFD1",
        },
        accent: { primary: "#47E671", dark: "#2B814C", light: "#3AF572" },
        text: {
          primary: "#EDEDEF",
          400: "#CFCFD1",
          500: "#9C9C9E",
          600: "#625F5F",
        },
        success: "#61C225",
        error: "#D80925",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
