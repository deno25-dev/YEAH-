/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tv-green': '#10b981',
        'tv-red': '#ef4444',
        'tv-bg': '#0f172a',
        'tv-sidebar': '#1e293b',
      },
    },
  },
  plugins: [],
}
