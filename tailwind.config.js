/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern": "url('/src/assets/painting/hero.jpg')",
				slider1: "url('/src/assets/NewAssets/HeroViridi1.jpg')",
				slider2: "url('/src/assets/NewAssets/HeroViridi3.jpeg')",
				slider3: "url('/src/assets/NewAssets/HeroViridi3.jpg')",
				services: "url('/src/assets/painting/services.jpg')",
				consulting: "url('/src/assets/painting/paint6Hero.jpg')",
				aboutHero: "url('/src/assets/wallpaper/wallpaper3.jpg')",
			},
			colors: {
				primary: "#1CAD57",
				secondary: "#0E733B",
			},
		},
	},
	plugins: [],
};
