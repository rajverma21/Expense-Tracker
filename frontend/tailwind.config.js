/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{html,jsx}',
    './src/context/**/*.{html,jsx}',
    './src/App.jsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      title: ['Jost', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
