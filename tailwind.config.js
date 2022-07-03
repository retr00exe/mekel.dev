module.exports = {
	mode: 'jit',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '5%',
				sm: '32px',
			},
		},
		extend: {
			fontFamily: {
				main: 'Source Sans Pro, sans-serif',
				montserrat: 'Montserrat, sans-serif',
				oswald: 'Oswald',
			},
			colors: {
				accent: {
					DEFAULT: '#F6F5F1',
				},
			},
			screens: {
				'-2xl': { raw: '(max-width: 1535px)' },
				'-xl': { raw: '(max-width: 1279px)' },
				'-lg': { raw: '(max-width: 1023px)' },
				'-md': { raw: '(max-width: 767px)' },
				'-sm': { raw: '(max-width: 639px)' },
			},
			backgroundSize: {
				'1/2': '50%',
				'1/3': '33.3333%',
				'1/4': '25%',
			},
			boxShadow: {
				custom: '4px 7px 21px rgba(22, 21, 53, 0.06)',
				custom2: '9px 9px 18px -5px rgba(13, 15, 32, 0.14);',
			},
		},
	},
	plugins: [],
};
