/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "#ffffff00",
      black: "#0D0D0D",
      white: {
        500: "#EFF3FFBF",
        900: "#EFF3FF",
      },
      gray: "#9698A0",
    },
    spacing: {
      0: "0px",
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
    },
    extend: {
      fontFamily: {
        NeueMontreal: ["var(--font-neueMontreal)"],
      },
      backgroundImage: {
        page: "url('/background.png')",
      },
    },
  },
  plugins: [],
};
