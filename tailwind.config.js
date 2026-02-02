/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#020617', // Deep Space Navy
          800: '#0f172a',
        },
        cyan: {
          400: '#22D3EE', // Electric Cyan
          500: '#06b6d4',
        },
        slate: {
          500: '#64748B', // Muted Slate
          300: '#cbd5e1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
