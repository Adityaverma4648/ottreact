/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
       blackBG : "bg-black",
       darkBG : "bg-slate-900",
       whiteTEXT : "text-white",
       grayTEXT : "text-gray-300",
       redText : "text-red-500",
       
       whiteBG : "bg-white",
       lightBG : "bg-slate-200",
       blackText : "text-black",
       grayText : "text-gray-700",
    },
  },
  plugins: [],
}

