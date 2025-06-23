module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { 'accent-gold': '#f59e0b', 'brand-navy': '#0a0f1f' },
      fontFamily: { playfair: ['var(--font-playfair)'], inter: ['var(--font-inter)'] },
    },
  },
  plugins: [],
};
