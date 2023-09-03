import { fontFamily } from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './views/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Noto Sans TC"', ...fontFamily.sans],
			},
		},
	},
	plugins: [forms],
};
