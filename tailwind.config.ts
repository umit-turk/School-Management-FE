import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        skyBlue: "#C3EBFA",           // Daha belirgin mavi ton
        lightSkyBlue: "#EDF9FD",      // Açık mavi ton
        lavenderPurple: "#CFCEFF",     // Lavanta moru
        lightLavenderPurple: "#F1F0FF", // Açık lavanta moru
        goldenYellow: "#FAE27C",       // Altın sarısı
        lightGoldenYellow: "#FEFCE8",  // Açık altın sarısı
      }
    },
  },
  plugins: [],
};
export default config;
