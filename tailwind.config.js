/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Renaming for clarity and semantic meaning
        'cosmic-ink': '#030712',      // Primary Background
        'luminous-cyan': '#22d3ee',   // Primary Accent (replaces orange)
        'ancient-gold': '#d4af37',     // Secondary Accent (sparingly used)
        'stellar-magenta': '#c026d3', // Data Visualization
        
        // UI Text & Elements
        'text-bright': '#f9fafb',      // Headings
        'text-neutral': '#d1d5db',     // Body Text
        'text-subtle': '#9ca3af',       // Muted text, captions
        'ui-slate': '#374151',         // Borders, dividers
        'ui-hover': 'rgba(255, 255, 255, 0.05)', // Subtle hover for list items, etc.
      },
      fontFamily: { 
        playfair: ['var(--font-playfair)'], 
        inter: ['var(--font-inter)'] 
      },
      // A new, more subtle "glow" effect for the Luminous Cyan
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(34, 211, 238, 0.25), 0 0 30px rgba(34, 211, 238, 0.1)',
      },
      // Adding a fade-in animation for content
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};