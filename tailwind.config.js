/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // We will make cosmic-ink pure black as requested
        'cosmic-ink': '#000000', 
        'luminous-cyan': '#22d3ee',
        'veridian-teal': '#14b8a6',
        'burnt-amber': '#f59e0b',
        'text-bright': '#f9fafb',
        'text-neutral': '#d1d5db',
        'text-subtle': '#9ca3af',
        'ui-slate': '#374151',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        inter: ['var(--font-inter)'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(34, 211, 238, 0.25), 0 0 40px rgba(34, 211, 238, 0.1)',
      },
      // --- THE KEY CHANGE IS HERE ---
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        // New, more sophisticated animation for the background
        'aurora-drift': 'auroraDrift 40s infinite alternate linear', 
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // We define the movement for our aurora blobs
        auroraDrift: {
          '0%': { transform: 'translate(-20%, -20%)' },
          '100%': { transform: 'translate(20%, 20%)' },
        }
      },
    },
  },
  plugins: [],
};