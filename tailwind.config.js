/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '320px',
      'md': '425px',
      'lg': '768px',
      'xl': '1024px',
    },
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
      serif: ['Raleway', 'serif'],
    },
    // colors: {
    //   'black': "#000",
    //   'white': "#fff",
    // },

    extend: {
      boxShadow:{
        'sp': '-15px 20px 10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: []
};
