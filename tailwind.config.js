const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');
const aspectRatio = require('tailwindcss-aspect-ratio');
const typography = require('@tailwindcss/typography');

// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./pages/*.js', './components/*.js'],
  experimental: 'all',
  theme: {
    aspectRatio: {
      square: [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9], // or 16 / 9
      '4/3': [4, 3], // or 4 / 3
      '21/9': [21, 9], // or 21 / 9
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['Showcase Slab', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          blue: '#1c75bb',
          yellow: '#f9b818',
          black: '#060000',
        },
      },
    },
  },
  // Default values here: https://tailwindcss.com/docs/pseudo-class-variants#default-variants-reference
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-focus'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-focus'],
    aspectRatio: ['responsive'],
  },
  plugins: [
    // See https://github.com/webdna/tailwindcss-aspect-ratio for details
    aspectRatio,
    // See https://tailwindui.com/documentation for details
    tailwindUI,
    // See https://github.com/tailwindlabs/tailwindcss-typography for details
    typography,
  ],
};
