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
      colors: {
        // Konfigurasi warna untuk light mode
        light: {
          primary: '#FDF0D5',
          invert: '#24282B',
          brand: '#669BBC',
          brandLighter: '#003049',
          secondBrand: '#C1121F',
          secondBrandLighter: '#780000', 
        },
        // Konfigurasi warna untuk dark mode
        dark: {
          primary: '#24282B',
          invert: '#FDF0D5', 
          brand: '#003049',
          brandLighter: '#669BBC',
          secondBrand: '#780000',
          secondBrandLighter: '#C1121F', 
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
