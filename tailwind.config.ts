import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        lm: {
          light: '#A7C8F2',
          brand: '#0597F2', 
          ink: '#022601',
          green: '#618C03',
          lime: '#97BF04',
          bg: '#F2F2F0',
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;