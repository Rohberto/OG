module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'poppins': ['"poppins"', 'sans-serif']
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
         'button': '#e11d48',
         "body": "#d9d9d9",
         "text": "#0096c7",
         "fade": "#a3b18a"
  },
  screens: {
    'min-tablet': '450px',
    'tablet': '500px',
    // => @media (min-width: 640px) { ... }
    'midtablet': '550px',
  "bigtablet": '761px',
    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }
  
    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
  },
    
  },
  plugins: [],
}
