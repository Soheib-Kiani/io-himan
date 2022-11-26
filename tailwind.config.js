/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "small": "8px",
        "smallname": "10px",
        
      },
      fontFamily: {
        "myfont" : "kalameh"
      }
    },
  },
  plugins: [],
}