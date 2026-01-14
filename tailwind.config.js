/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'marquee': 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-1 * var(--content-width) - var(--gap, 1rem)))' },
        },
        'marquee-vertical': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(-1 * var(--content-height) - var(--gap, 1rem)))' },
        }
      },
      colors: {
        'dark-blue': '#13191C',
        'darker-blue': '#0A0E10',
        primary: {
          50: '#fff9e6',
          100: '#fff2cc',
          200: '#ffe699',
          300: '#ffd966',
          400: '#ffcc33',
          500: '#F9BB07', // Couleur de base
          600: '#e6a500',
          700: '#b38100',
          800: '#805c00',
          900: '#4d3700',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
