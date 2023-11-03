/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        'gmu-green': "#006633",
        'gmu-yellow': "#FFCC00",
        'ucla-yellow': "#FFB81C",
        'ucla-blue': "#0033A0",
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

