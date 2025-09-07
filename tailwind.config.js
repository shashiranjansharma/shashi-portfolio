export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure tsx is included
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': { light: '#3b82f6', DEFAULT: '#2563eb', dark: '#1d4ed8' },
        'secondary': '#64748b',
        'background': { light: '#ffffff', DEFAULT: '#0f172a', dark: '#020617' },
        'text': { light: '#f8fafc', DEFAULT: '#cbd5e1', dark: '#94a3b8' },
        'accent': '#38bdf8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeInUp: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        slideInLeft: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(0)' } },
      }
    },
  },
  plugins: [],
};