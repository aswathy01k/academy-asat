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
          navy: {
            950: '#070C1B',
            900: '#0B132B',
            850: '#111C3D',
            800: '#1C2541',
            700: '#26345A',
          },
          blue: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
          },
          violet: {
            50: '#F5F3FF',
            100: '#EDE9FE',
            400: '#A78BFA',
            500: '#8B5CF6',
            600: '#7C3AED',
          },
          cyan: {
            400: '#22D3EE',
            500: '#06B6D4',
          },
          amber: {
            400: '#FBBF24',
            500: '#F59E0B',
            600: '#D97706',
          },
          emerald: {
            400: '#34D399',
            500: '#10B981',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 19, 43, 0.06), 0 2px 6px -1px rgba(11, 19, 43, 0.04)',
        'card': '0 10px 30px -4px rgba(11, 19, 43, 0.08), 0 4px 10px -2px rgba(11, 19, 43, 0.03)',
        'hover': '0 20px 40px -8px rgba(37, 99, 235, 0.16), 0 8px 16px -4px rgba(11, 19, 43, 0.06)',
        'glow': '0 0 40px -10px rgba(59, 130, 246, 0.35)',
        'glow-violet': '0 0 40px -10px rgba(139, 92, 246, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      }
    },
  },
  plugins: [],
}

