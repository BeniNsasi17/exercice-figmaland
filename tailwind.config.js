/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      blue: "#2191F9",
      white:"#FFFF"
    },
    extend: {
      backgroundImage: {
        'header-section': "url('/img/banner.png')",
        'Feature-section': "url(/img/videoPlay.svg)"
    },
  },
},
  plugins: [],
}

