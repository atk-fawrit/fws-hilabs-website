import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern premium color palette
        background: '#FFFFFF',
        'page-background': '#000000',
        primary: '#FFFFFF',
        secondary: 'rgba(255, 255, 255, 0.7)',
        accent: '#3b82f6',
        'accent-secondary': '#8b5cf6',
        'accent-tertiary': '#ec4899',
        dark: '#000000',
        'dark-secondary': '#1a1a1a',
        'neutral-bg': '#2c3e50',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.5rem',
        DEFAULT: '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        'full': '9999px',
      },
      boxShadow: {
        'none': 'none',
        'sm': '0 4px 12px rgba(0, 0, 0, 0.15)',
        DEFAULT: '0 10px 30px rgba(0, 0, 0, 0.3)',
        'lg': '0 20px 50px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-ring': 'pulseRing 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(59, 130, 246, 0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config