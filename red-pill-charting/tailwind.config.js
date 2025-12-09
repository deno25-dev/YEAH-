module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // YOUR colors from PRD
        'primary': '#DC2626',      // Your red
        'black': '#000000',        // Your black
        'white': '#FFFFFF',        // Your white
        
        // Chart colors from PRD
        'bull': '#10B981',         // Bullish green
        'bear': '#EF4444',         // Bearish red
        
        // Additional UI colors
        'background': '#0F172A',   // Dark background
        'sidebar': '#1E293B',      // Sidebar
        'card': '#334155',         // Cards
      },
    },
  },
  plugins: [],
}
