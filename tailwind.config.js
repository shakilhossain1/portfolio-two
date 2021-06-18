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
          primary: withOpacity('var(--color-primary)')
        }
      },
      container: {
        center: true,
        padding: '1rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
