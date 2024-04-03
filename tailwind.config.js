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