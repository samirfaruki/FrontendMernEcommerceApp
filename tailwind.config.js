/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
}
