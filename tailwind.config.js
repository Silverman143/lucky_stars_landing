/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', "sans-serif"],
        suezOne: ['"Suez One"', "serif"],
      },
      boxShadow: {
        custom: "0px 5px 0px 0px #191A23",
      },
      screens: {
        mdp: "1126px",
      },
    },
  },
  plugins: [],
};
