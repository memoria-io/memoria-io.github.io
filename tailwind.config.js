/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,md}'],
    theme: {
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        'pre': {
                            padding: '1em',
                            borderRadius: '0.5em',
                            overflowX: 'auto',
                        },
                        'code': {
                            background: '#2d2d2d',
                            borderRadius: '0.25em',
                            padding: '0.2em 0.4em',
                            fontSize: '0.9em',
                        },

                        'pre code': {
                            background: 'transparent',
                            padding: 0,
                            borderRadius: 0,
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
