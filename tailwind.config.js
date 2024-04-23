/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heading': {
          'color': '#2B3A55'
        },
        'sub-heading': {
          'color': "#1B4242"
        },
        "chestnut": "#bb4747",
        "cloud": "#cbc9c2",
        "leaf": "#baceb7",
        "link-water": "#cdd7e4",
        "cavern-pink": "#d9b5b3",
        "everglade": "#204e3c",
        "pearl": "#fffcf3",
        "mist": "#b2cad2"
      },

    },
    plugins: [],
  }
}