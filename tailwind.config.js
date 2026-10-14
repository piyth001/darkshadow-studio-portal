/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './app.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Kanit', 'sans-serif']
      },
      colors: {
        discord: {
          blurple: '#5865F2',
          dark: '#1e1f22',
          card: '#0f1015'
        },
        darkshadow: {
          red: '#ff1744',
          crimson: '#b71c1c',
          darkbg: '#050305',
          cardbg: '#0b070a'
        }
      }
    }
  },
  plugins: []
};
