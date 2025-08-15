module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        nebula: {
          DEFAULT: '#0b0b0b', 
          slate: '#737a7b',
          light: '#ffffff',
          accent: '#d7261e', 
          teal: '#7fb7b7'
        }
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}