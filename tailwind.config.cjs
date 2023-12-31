/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#efe8ff",
          100: "#dfd0fe",
          200: "#bfa2fe",
          300: "#a073fd",
          400: "#8045fd",
          500: "#6016fc",
          600: "#4d12ca",
          700: "#3a0d97",
          800: "#260965",
          900: "#130432",
          950: "#0a0219",
        },
        accentSecondary: {
          50: "#ffe8ef",
          100: "#fed0de",
          200: "#fea2bd",
          300: "#fd739d",
          400: "#fd457c",
          500: "#fc165b",
          600: "#ca1249",
          700: "#970d37",
          800: "#650924",
          900: "#320412",
          950: "#190209",
        },
        semantic: {
          50: "#fff6e8",
          100: "#feecd0",
          200: "#fed9a2",
          300: "#fdc673",
          400: "#fdb345",
          500: "#fca016",
          600: "#ca8012",
          700: "#97600d",
          800: "#654009",
          900: "#322004",
          950: "#191002",
        },
        semanticSecondary: {
          50: "#e8fffb",
          100: "#d0fef6",
          200: "#a2feed",
          300: "#73fde4",
          400: "#45fddb",
          500: "#16fcd2",
          600: "#12caa8",
          700: "#0d977e",
          800: "#096554",
          900: "#04322a",
          950: "#021915",
        },
        gray: {
          50: "#e7e7e9",
          100: "#ceced3",
          200: "#b6b6bd",
          300: "#9d9da7",
          400: "#858591",
          500: "#6d6d7a",
          600: "#545464",
          700: "#3c3c4e",
          800: "#232338",
          900: "#0b0b22",
          950: "#070714",
        },
      },
    },
  },
  plugins: [],
};
