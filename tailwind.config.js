/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./forms/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
       fontFamily: {
        inter: ["Inter_400Regular"], // can add multiple weights
        "inter-medium": ["Inter_500Medium"],
        "inter-bold": ["Inter_700Bold"],
          montserrat: ["Montserrat_600SemiBold"],
        "montserrat-bold": ["Montserrat_700Bold"],
      },
    },
  },
  plugins: [],
};
