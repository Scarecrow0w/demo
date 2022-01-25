module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min': '320px', 'max': '1023px'},
        'base': '1200px'
      },
      boxShadow: {
        'xs': '0 4px 7px rgba(0, 0, 0, 0.05)'
      }
    },
    colors: {
      'primary': {
        50: '#FBEDEF',
        100: '#F7D1D5',
        200: '#E3A2A2',
        300: '#D6807E',
        400: '#DF6760',
        500: '#E35B4B',
        600: '#D45449',
        700: '#C24B42',
        800: '#B5453C',
        900: '#A73C31'
      },
      'grey': {
        50: '#FCFAF9',
        100: '#F7F5F4',
        200: '#F1F0EF',
        300: '#E4E3E2',
        400: '#C2C0BF',
        500: '#A3A2A1',
        600: '#797877',
        700: '#656463',
        800: '#464544',
        900: '#252423'
      },
      'blue': {
        50: '#E5EAF0',
        100: '#BEC9DB',
        200: '#94A6C3',
        300: '#6B84AB',
        400: '#496B9B',
        500: '#22528D',
        600: '#1A4B84',
        700: '#0F4179',
        800: '#06386C',
        900: '#002855'
      }
    },
    fontFamily: {
      'sans': 'system, -apple-system, BlinkMacSystemFont, Segoe UI, Segoe WP, Roboto, Ubuntu, Oxygen, Cantarell, Fira Sans, Helvetica Neue, Helvetica, Lucida Grande, Droid Sans, Tahoma, Microsoft Sans Serif, sans-serif'
    },
    fontSize: {
      'sm': ['14px', {
        letterSpacing: '0px',
        lineHeight: '20px'
      }],
      'base': ['16px', {
        letterSpacing: '0px',
        lineHeight: '24px'
      }],
      'lg': ['18px', {
        letterSpacing: '0px',
        lineHeight: '24px'
      }],
      'xl': ['22px', {
        letterSpacing: '0px',
        lineHeight: '28px'
      }],
      '2xl': ['24px', {
        letterSpacing: '0px',
        lineHeight: '28px'
      }],
      '3xl': ['28px', {
        letterSpacing: '0px',
        lineHeight: '36px'
      }],
      '4xl': ['32px', {
        letterSpacing: '0px',
        lineHeight: '40px'
      }]
    },
    screens: {
      'sm': {'min': '1024px', 'max': '1199px'}
    }
  },
  plugins: [],
}