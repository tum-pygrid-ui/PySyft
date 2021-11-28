 const colors = require('./src/components/Styles/colors')
 const themes = require('./src/Themes/cyan')

module.exports = {
  purge: ['src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ['"Roboto"', 'sans-serif'],
      rubik: ['"Rubik"', 'sans-serif'],
      firacode: ['"Fira Code"', 'monospace']
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      ...colors, 
      ...themes,
    },
  },
  variants: {
    extend: {
    }
  },
  plugins: []
}
