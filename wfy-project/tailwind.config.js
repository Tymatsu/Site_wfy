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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'oswald': ['Oswald'],
        'title': ['Georgia Pro'],
        'manrope': ['Manrope'],
        'automobile': ['Automobile Contest'],
      },
      colors: {
        custom: {
          cards: '#FFDBC0',
          back1: '#FFC959',
          back2: '#FFE7D5',
          testimonials: '#ED996C',
          textTestimonials: '#FFE7D5',
          point: '#E57A44',
          buttonText: '#0EB0CC',          
          titleJOJO: '#BA5624',          
          bgJOJO: '#F9D971',          
          titleAbout: '#0EB0CC'     
        },
      },
    },
  },
  plugins: [],
};
