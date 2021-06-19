function withOpacity(variableName) {
  return ({ opacityValue }) =>
    opacityValue !== undefined
      ? `rgba(${variableName}, ${opacityValue})`
      : `rgba(${variableName})`;
}

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          primary: withOpacity('var(--color-primary)'),
          muted: withOpacity('var(--color-muted)'),
          dark: withOpacity('var(--color-dark)')
        }
      },
      textColor: {
        skin: {
          primary: withOpacity('var(--color-primary)'),
          muted: withOpacity('var(--color-muted)'),
          dark: withOpacity('var(--color-dark)')
        }
      },
      borderColor: {
        skin: {
          primary: withOpacity('var(--color-primary)')
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
