/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",],
  theme: {
    extend: {
      screens:{
        'max-sm': {'max': '480px'},
      },
    },
  },
  plugins: [],
}

