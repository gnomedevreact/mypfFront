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
        blackMain: "#141414",
        gray: "#1a1a1a",
        active: "#343434",
        lightGray: "#434343",
        brightGray: "#a3a3a3",
        darkGray: "#6b6b6b",
        purple: "#800080",
        green: "#173125",
        lightGreen: "#12c971",
        btnGray: "#3a3a3a",
      },
    },
  },
  plugins: [],
};
export default config;
