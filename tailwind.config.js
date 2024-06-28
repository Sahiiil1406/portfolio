/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(69deg, rgba(0,0,0,1) 14%, rgba(45,0,0,1) 26%, rgba(0,0,0,1) 79%);'
        ,
      },
    },
  },
  plugins: [],
};
