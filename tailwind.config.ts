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
        transparent: "transparent",
        page: "#F6F6F6",
        section: { primary: "#FDF8EE", secondary: "#00100B" },
        accent: "#CCFF00",
        "accent-contrast": "#2B34F5",
        text: {
          primary: "#001910",
          secondary: "#4C5162",
          tertiary: "#F6F6F6",
          accent: { light: "#8D9899", dark: "#EBC390" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
