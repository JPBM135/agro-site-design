/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"slide-into-view": "slideIntoView 0.5s ease-in-out forwards",
			},
			colors: {
				"office-green": "#157f1fff",
				snow: "#fffcffff",
				"bright-pink-crayola": "#e85d75ff",
				"slate-gray": "#718f94ff",
				"raisin-black": "#1e1e24ff",
				  "black-pearl": "#09090b",
			},
		},
	},
	plugins: [],
};
