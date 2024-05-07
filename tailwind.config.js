/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './views/**/*.{js,jsx}',
    './layout/**/*.{js,jsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '1.25rem',
        },
      },

      colors: {
        black: '#1A1A1A',
        navyBlue: '#33639F',
        transparentBlue: 'rgba(51, 99, 159, 0.5)',
        beige: '#B9A38E',
      },

      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },

      fontSize: {
        little: ['14px', '24px'],
        small: ['16px', '24px'], // class="text-small"
        middle: ['18px', '20px'], // class='text-middle'
        big: ['24px', '30px'], // class="text-big"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/typography'),
  ],
};
