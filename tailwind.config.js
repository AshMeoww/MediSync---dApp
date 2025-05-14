// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-blue': 'linear-gradient(to bottom right, rgba(217, 217, 217, 0), #DAFFEF)',
      },
      colors: {
        'primary': '#DAFFEF',
        'secondary': '#00A8A8',
        'accent': '#FFD700',
        'text': '#333333',
      },
    },
  },
  plugins: [],
};
