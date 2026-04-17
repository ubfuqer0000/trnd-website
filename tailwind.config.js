/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#05142B',
        'brand-blue': '#3B6AFF',
        'brand-surface': '#0a1e3d',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'objektiv': ['Objektiv', 'Montserrat', 'sans-serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      animation: { marquee: 'marquee 35s linear infinite' },
      keyframes: { marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } } }
    },
  },
  plugins: [],
}
