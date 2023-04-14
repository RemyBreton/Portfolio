/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 375px) { ... }

      'md': '525px',
      // => @media (min-width: 525px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        'perso-white': '#f8f9fa',
        'perso-black': '#212529',
        'perso-white2': '#e9ecef',
        'perso-black2': '#343a40',
        'perso-white3': '#dee2e6'
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
