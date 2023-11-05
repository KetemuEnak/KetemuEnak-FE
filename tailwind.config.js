/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/home-content.jsx", "./src/components/detail-content.jsx", "./src/components/profile-content.jsx", "./src/pages/home-page.jsx", "./src/pages/detail-page.jsx", "./src/pages/profile-page.jsx"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
