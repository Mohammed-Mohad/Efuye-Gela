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
          "0px 4px 6px rgba(212, 212, 212, 0.15), 0px 8px 16px rgba(212, 212, 212, 0.10)",
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
