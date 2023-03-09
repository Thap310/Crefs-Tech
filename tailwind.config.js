/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm:'480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    
    extend: {
      colors: {
        'primary': '#29ABE2',
        'dark-blue': '#004A66',
        'light-blue': '#F2FCFF',
        'dark': '#002938',
        'white': '#ffffff'
      },
    },
  },
  plugins: [],
}
