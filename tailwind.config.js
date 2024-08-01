/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        "-118": "-118px",
      },
      spacing: {
        '-32984': '-32984px',
        '-11930': '-11930px',
      },
      inset: {
        "-32": "-32px",
      },
      backdropBlur: {
        20: "20px",
      },
      backdropBrightness: {
        100: "100%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        itim: ["Itim", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
      },
      letterSpacing: {
        "-1.2": "-1.2px",
      },
      boxShadow: {
        custom:
          "0px 12.54px 25.08px #d4d4d41a, 0px 46.58px 46.58px #d4d4d417, 0px 105.7px 62.7px #d4d4d40d, 0px 186.32px 75.24px #d4d4d403, 0px 292.02px 82.41px transparent",
      },
      transform: {
        "-90": "rotate(-90deg)",
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
