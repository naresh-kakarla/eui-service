/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{html,ts}",
  ],
   safelist: [
    {
      pattern: /col-span-(\d+)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

