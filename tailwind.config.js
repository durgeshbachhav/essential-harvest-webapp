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
          '50': '#e9fff7',
          '100': '#cbffe9',
          '200': '#7affcc',
          '300': '#5bfac7',
          '400': '#1becb0',
          '500': '#00d49a',
          '600': '#00ad7f',
          '700': '#008a6a',
          '800': '#006d54',
          '900': '#005947',
          '950': '#003329',

          // '50': '#fff0f3',
          // '100': '#ffe2e9',
          // '200': '#ffcad8',
          // '300': '#ff9fb7',
          // '400': '#ff6992',
          // '500': '#ff1a5e',
          // '600': '#ed115d',
          // '700': '#c8084f',
          // '800': '#a80949',
          // '900': '#8f0c44',
          // '950': '#500121',
        },
        'heading': {
          'color': '#2B3A55'
        },
        'sub-heading': {
          'color': "#1B4242"
        },

      },

    },
    plugins: [],
  }
}