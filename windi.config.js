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
      boxShadow: {
        card: '0px 0px 20px 1px rgb(0 0 0 / 15%)',
      },
    },
  },
}
