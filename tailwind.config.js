/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        brand: "",
        banner: "url('../public/assets/banner.jpg')",
      },
    },
  },
  plugins: [],
};
