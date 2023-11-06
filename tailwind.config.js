/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ke-brand": ["Kavoon", "cursive"],
      },
      colors: {
        primary: "#BCA37F",
        secondary: "#EAD7BB",
        light: "#fff2d8",
      },
    },
  },
  /*eslint-env node*/
  plugins: [require("flowbite/plugin")],
};
