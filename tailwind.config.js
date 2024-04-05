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
          '100': '#c9ffea',
          '200': '#98ffdb',
          '300': '#47ffc8',
          '400': '#14f3b8',
          '500': '#00dba1',
          '600': '#00b386',
          '700': '#008f6f',
          '800': '#007159',
          '900': '#005c4b',

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