/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-1": "var(--grey-1)",
        "grey-2": "var(--grey-2)",
        "grey-3": "var(--grey-3)",
      },
    },
  },
  plugins: [],
};
