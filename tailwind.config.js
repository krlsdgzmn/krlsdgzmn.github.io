/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,php,js,css}"],
	theme: {
		extend: {
			// Colors crimson, black, navy, white
			colors: {
				primary: "#be0c18",
				secondary: "#141e46",
			},

			// Fonts
			fontFamily: {
				inter: ["Inter"],
			},
		},
	},
	plugins: [],
};
