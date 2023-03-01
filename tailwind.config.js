const colors = require('./src/styles/colors.json')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			borderWidth: {
				1.5: '1.5px',
			},
			boxShadow: {
				border: '0 0 0 1px ',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			dark: 'rgb(23, 23, 23)',
			white: 'rgb(255, 255, 255)',
			gray: {
				100: 'rgb(245, 245, 245)',
				200: 'rgb(229, 229, 229)',
				300: 'rgb(212, 212, 212)',
				400: 'rgb(163, 163, 163)',
				600: 'rgb(82, 82, 82)',
				700: 'rgb(64, 64, 64)',
			},
			blue: {
				DEFAULT: 'rgb(59, 73, 223)',
			},
		},
	},
	plugins: [],
}
