module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212529', // Example color
        secondary: '#f1c40f',
        customGray: '#343434',
        customGray2: '#9897A9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        'ps': '400px',
        'sm': '460px',  // Small devices
        'md': '768px',  // Medium devices (tablets)
        'lg': '1024px', // Large devices (laptops/desktops)
        'xl': '1280px', // Extra large screens
        '2xl': '1536px', // Very large screens
      },
    },
  },
  plugins: [],
}



