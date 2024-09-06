import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: {
          100: "#73A5FF",
          300: "#4C8DFF",
          500: "#397DF6",
          700: "#2F68CC",
          900: "#234E99",
        },
        success: {
          100: "#80FFBF",
          300: "#22E584",
          500: "#14CC70",
          700: "#0F9954",
          900: "#0A6638",
        },
        danger: {
          100: "#FF8099",
          300: "#F23D61",
          500: "#CC1439",
          700: "#990F2B",
          900: "#660A1D",
        },
        warning: {
          100: "#FFD073",
          300: "#E5AC39",
          500: "#D99000",
          700: "#996600",
          900: "#664400",
        },
        dark: {
          100: "#4C4C4C",
          300: "#333333",
          500: "#171717",
          700: "#0D0D0D",
          900: "#000000",
        },
        light: {
          100: "#FFFFFF",
          300: "#F7FBFF",
          500: "#EDF3FA",
          700: "#D5DAE0",
          900: "#8D9094",
        },
      },
      fontSize: {
        fontXS: "0.75rem", //12px
        fontS: "0.875rem", //14px
        fontM: "1rem", //16px
        fontL: "1.125rem", //18px
        fontXL: "1.25rem", //20
        fontXXL: "1.625rem", //26px
      },
      fontWeight: {
        fontWR: "400",
        fontWM: "500",
        fontWB: "700",
        fontWSB: "600",
      },
      lineHeight: {
        lineHS: "16px",
        lineHM: "24px",
        lineHL: "36px",
      },
    },
  },
  plugins: [],
};
export default config;
