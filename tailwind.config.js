/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./src/assets/more/15.jpg')",
        'footer': "url('./src/assets/more/13.jpg')",
        'addCoffee': "url('./src/assets/more/11.png')",
        'banner': "url('./src/assets/more/3.png')",
        'cards4': "url('./src/assets/more/4.png')",
        'cards5': "url('./src/assets/more/5.png')",
        'login': "url('./src/assets/more/9.png')",
      },
      fontFamily: {
        "rancho": ["Rancho", "cursive"]
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}