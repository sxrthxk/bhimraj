module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Dosis", "sans-serif"],
        'serif': ['Cormorant', 'sans-serif'],
        'fancy': ['Herr Von Muellerhoff', 'cursive']
      },
      fontSize: {
        'base': "1.25rem"
      },
      colors: {
        khaki: "#b99470"
      }
    },
  },
  plugins: [],
}
