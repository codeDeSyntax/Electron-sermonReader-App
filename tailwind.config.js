/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js",],
  theme: {
    extend: {},
    colors:{
      background:'#171a1c',
      background2:'#2f3235',
      text1:'#8c8c8c',
      text2:'#c8cfd3',
      blu:'#5b9fca',
      clear:'transparent'
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}