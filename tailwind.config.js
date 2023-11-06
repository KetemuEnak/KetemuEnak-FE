/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/HomePage/home-content.jsx",
    "./src/components/DetailEvent/detail-content.jsx",
    "./src/components/Profile/profile-eo.jsx",
    "./src/components/Profile/profile-seller.jsx",
    "./src/pages/HomePage/index.jsx",
    "./src/pages/DetailPage/index.jsx",
    "./src/pages/ProfilePage/index.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
