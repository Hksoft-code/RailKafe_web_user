/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "0px" },
        minsm:{min:"420px"},
        maxsm:{max:"420px"},
        sm: { min: "640px" },
        md: { min: "920px" },
        lg: { min: "1180px" },
        xl: { min: "1536px" },
      },
    },
  },
  plugins: [],
};
