/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				"landing-image": "url('/src/assets/landing-bg.png')",
			},
			colors: {
				"dark-blue": "#293241",
				"dirty-white": "#F8F8F8",
				orange: "#EE6C4D",
				"orange-hover": "#da4a28",
			},
		},
	},
	plugins: [],
};
