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
        ink: "#000000",
        paper: "#ffffff",
        sand: "#edebe1",
        mist: "#e0e9ea",
      },
      fontFamily: {
        sans: [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-roboto-mono)", "ui-monospace", "monospace"],
      },
      borderColor: {
        DEFAULT: "#000000",
      },
    },
  },
  plugins: [],
};

export default config;
