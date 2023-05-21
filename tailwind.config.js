/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        heroOne: '#F2FAF8',
        heroTwo: '#F7F5FD',
        feedback: '#ECE7FB',
        feedbacktitle: '#BCBCBC',
        CTAtext: '#FCFAF5',
      },
      fontFamily: {
        Poppins: 'Poppins',
      }
    },
  },
  plugins: [],
}
