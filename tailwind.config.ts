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
        // HI Labs institutional color palette
        background: '#F4F4F2',
        primary: '#1C1C1C',
        secondary: '#5F6A7A',
        accent: '#2F4A6D',
        warning: '#8A2E2E',
        // Forbidden colors are explicitly excluded
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
      },
      spacing: {
        'section': '4rem',
        'subsection': '2rem',
        'element': '1rem',
        'tight': '0.5rem',
        'loose': '6rem',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      // Responsive breakpoints for institutional design
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      // Responsive typography scaling
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      // Responsive spacing
      margin: {
        'mobile': '1rem',
        'tablet': '1.5rem',
        'desktop': '2rem',
      },
      padding: {
        'mobile': '1rem',
        'tablet': '1.5rem',
        'desktop': '2rem',
      },
      maxWidth: {
        'institutional': '1200px',
      },
      // Disable rounded corners, shadows, and gradients per design constraints
      borderRadius: {
        'none': '0',
        DEFAULT: '0',
      },
      boxShadow: {
        'none': 'none',
        DEFAULT: 'none',
      },
      backgroundImage: {
        'none': 'none',
      },
    },
  },
  plugins: [],
}

export default config