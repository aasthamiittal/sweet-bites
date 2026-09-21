/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          dark: '#E64A19',
          light: '#FFA726',
          lighter: '#FFE0B2',
        },
        background: '#FFFFFF',
        text: {
          primary: '#2D2D2D',
          secondary: '#666666',
          orange: '#FF6B35',
        },
        border: '#FFE0B2',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(255, 107, 53, 0.08)',
        'card-hover': '0 8px 24px rgba(255, 107, 53, 0.15)',
      },
    },
  },
  plugins: [],
}
