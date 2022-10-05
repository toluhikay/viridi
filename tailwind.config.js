/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/src/assets/painting/hero.jpg')",
        'services': "url('/src/assets/painting/services.jpg')",
        'consulting': "url('/src/assets/painting/paint6Hero.jpg')",
        'aboutHero' : "url('/src/assets/wallpaper/wallpaper3.jpg')"
      }
    },
  },
  plugins: [],
}
