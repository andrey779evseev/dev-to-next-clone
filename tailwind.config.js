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
				1: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.1)',
			},
			zIndex: {
				modal: 500,
				tooltip: 500,
				dropdown: 400,
				elevate: 1,
			},
			animation: {
				'scale-in': 'scale-in 150ms ease-in',
				'scale-out': 'scale-out 150ms ease-out',
			},
			keyframes: {
				'scale-in': {
					'0%': {
						transform: 'scale(0.5)',
					},
					'100%': {
						transform: 'scale(1.0)',
					},
				},
				'scale-out': {
					'100%': {
						transform: 'scale(1.0)',
					},
					'0%': {
						transform: 'scale(0.5)',
					},
				},
			},
			fontFamily: {
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'var(--font-roboto)',
					'Helvetica',
					'Arial',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
				],
				monospace: [
					'SF Mono',
					'SFMono-Regular',
					'Consolas',
					'Liberation Mono',
					'Menlo',
					'Courier',
					'monospace',
				],
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			dark: 'rgb(23, 23, 23)',
			black: 'rgb(0, 0, 0)',
			white: 'rgb(255, 255, 255)',
			gray: {
				50: 'rgb(250, 250, 250)',
				100: 'rgb(245, 245, 245)',
				200: 'rgb(229, 229, 229)',
				300: 'rgb(212, 212, 212)',
				400: 'rgb(163, 163, 163)',
				600: 'rgb(82, 82, 82)',
				700: 'rgb(64, 64, 64)',
				800: 'rgb(38, 38, 38)',
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
			reaction: {
				like: 'rgb( 220, 38, 38 )',
				comment: 'rgb( 245, 158, 11 )',
				bookmark: 'rgb( 79, 70, 229 )',
			},
			tag: {
				green: 'rgb(8, 59, 21)',
				violet: 'rgb(86, 39, 101)',
				gold: 'rgb(247, 223, 30)',
				black: 'rgb(34, 34, 34)',
				lime: 'rgb(26, 214, 67)',
				gray: 'rgb(118, 118, 118)',
				brown: 'rgb(212, 161, 116)',
				turquoise: 'rgb(139, 235, 255)',
				orange: 'rgb(255, 153, 0)',
				yellow: 'rgb(235, 223, 55)',
				emerald: 'rgb(6, 181, 0)',
				sky: 'rgb(115, 199, 230)',
				red: 'rgb(237, 21, 86)',
				burgundy: 'rgb(162, 40, 70)',
				azure: 'rgb(60, 165, 234)',
				pink: 'rgb(255, 51, 224)',
			},
			syntax: {
				background: '#08090a',
				text: '#f8f8f2',
				comment: '#808080',
				decoration: '#f39c12',
				literal: '#dda0dd',
				error: '#f9690e',
				name: '#7ed07e',
				string: '#f2ca27',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
