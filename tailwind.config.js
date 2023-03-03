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
        50: 'rgb(250, 250, 250)',
				100: 'rgb(245, 245, 245)',
				200: 'rgb(229, 229, 229)',
				300: 'rgb(212, 212, 212)',
				400: 'rgb(163, 163, 163)',
				600: 'rgb(82, 82, 82)',
				700: 'rgb(64, 64, 64)',
        800: 'rgb(38, 38, 38)'
			},
			blue: {
				DEFAULT: 'rgb(59, 73, 223)',
				darker: 'rgb(47, 58, 178)',
			},
			base: {
				100: '#090909',
				90: '#242424',
				80: '#3d3d3d',
				70: '#575757',
				60: '#717171',
				50: '#8a8a8a',
				40: '#a3a3a3',
				30: '#bdbdbd',
				20: '#d6d6d7',
				10: '#efefef',
				0: '#f9f9f9',
			},
		},
	},
	plugins: [],
}
