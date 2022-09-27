export default {
  plugins: [
    require('windicss/plugin/typography'),
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        main: {
          DEFAULT: '#212429',
        },
      },
    },
  },
}
