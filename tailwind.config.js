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
          md: '1.25rem',
          xl: '1.25rem',
        },
      },

      colors: {
        black: '#1A1A1A',
        blue: '#7ED4FF',
        navyBlue: '#4082CE',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        alata: ['Alata', 'sans-serif'],
      },

      fontSize: {
        small: ['16px', '24px'], // class="text-small"
        middle: ['18px', '24px'], // class='text-middle'
        big: ['24px', '29px'], // class="text-big"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/typography'),
  ],
};
