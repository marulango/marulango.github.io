const plugin = require('tailwindcss/plugin');

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
      keyframes: {
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'gradient-shift': 'gradientShift 15s ease infinite',
      },
      backgroundSize: {
        '400': '400% 400%',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-gradient-shift': {
          backgroundImage:
            'linear-gradient(-45deg, #ffffff, #f9e0d9, #fadadd, #d0eafc, #e1f7d5, #ffffff )',
        },
      });
    }),
    require('@tailwindcss/typography'),
    ]
};