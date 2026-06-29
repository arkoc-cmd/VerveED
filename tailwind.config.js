/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          copper: {
            50: '#fbf5ef',
            100: '#f5e7da',
            200: '#ecd0b3',
            300: '#dfb083',
            400: '#ce8852',
            500: '#c26e38',
            600: '#b45a2d',
            700: '#964626',
            800: '#793922',
            900: '#62301f',
            950: '#35160d',
          },
          charcoal: {
            50: '#f6f6f6',
            100: '#e7e7e7',
            200: '#d1d1d1',
            300: '#b0b0b0',
            400: '#888888',
            500: '#6d6d6d',
            600: '#5d5d5d',
            700: '#4f4f4f',
            800: '#454545',
            900: '#3d3d3d',
            950: '#1a1a1a', // Matte Black
          },
          cream: {
            50: '#fdfcf7',
            100: '#faf7ed',
            200: '#f3edd6',
            300: '#e7dcb4',
            400: '#d7c48b',
            500: '#c5ab63',
            600: '#b59451',
            700: '#977541',
            800: '#7c5e37',
            900: '#664c30',
            950: '#3b2919',
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'toast-in': 'toastIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        toastIn: {
          '0%': { opacity: '0', transform: 'translateY(100%) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}

