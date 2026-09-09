/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trust: {
          50: '#f4f5fa',
          100: '#e9eaf5',
          200: '#c8cbdc',
          300: '#9fa4c7',
          400: '#6971ab',
          500: '#3E4095',
          600: '#2F317B',
          700: '#262762',
          800: '#1F204E',
          900: '#141433',
          950: '#0b0c20',
          navy: '#191B47'
        },
        crimson: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#fad0d9',
          300: '#f7a8b9',
          400: '#f0718e',
          500: '#CB2151',
          600: '#b01742',
          700: '#8e1235',
          800: '#75122e',
          900: '#62142a',
          950: '#430b1b',
        },
        gold: {
          400: '#fbbf24',
          500: '#ffa415',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        hand: ['Caveat', 'cursive']
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
