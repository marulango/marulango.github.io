module.exports = {
  content: [
    '**/*.html',
    '**/*.php',
    '**/*.js',
    '!wp-admin',
    '!wp-includes',
    '!node_modules',
    '!Prepros Export'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Elza"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  fontFamily: {
    sans: ['Elza', 'sans-serif'],
  }
};