import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#6366F1",
        secondary: "#00518F",
        tertiary: "#0F314D",
        complementaryOne: "#F9FBFB",
        complementaryTwo: "#EFF3F6",
        complementaryThree: "#F8C300",
        disabled: "#C7DBEA",
        // complementaryFour: '#14132A',
        textColorOne: "#3A464F",
        textColorTwo: "#54626C",
        footerOne: "#202124",

        rojoBase: "#9E1D1F",
        blanco: "#FFFFFF",
        negro: "rgba(58, 70, 79, 1)",
        blancoTransparente: "rgba(255, 255, 255, 0.5)",
        negroTransparente: "rgba(0, 0, 0, 0.25)",
        transparente: "transparent",
        azulGris: "rgba(84, 98, 108, 1)",
        gris: "rgba(84, 98, 108, 0.05)",
        grisTenue: "rgba(84, 98, 108, 0.5)",
        grisBordeFormulario: "rgba(33, 34, 19, 0.1)",
        negroPuro: "rgba(0, 0, 0, 1)",
        grisDos: "#C7DBEA",
      },
    },
  },
  plugins: [],
};
export default config;
