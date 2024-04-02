/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#edfff7',
          '100': '#d5ffee',
          '200': '#aeffde',
          '300': '#70ffc5',
          '400': '#2bfda5',
          '500': '#00ff95',
          '600': '#00c06c',
          '700': '#009657',
          '800': '#067548',
          '900': '#07603d',
          '950': '#003721',
        },
        'heading': {
          'color': '#000'
        },
        'sub-heading': {
          'color': "#333333"
        }
      },

    },
    plugins: [],
  }
}