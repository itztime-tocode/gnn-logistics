/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxuryBlack: '#050505',    // Apple-inspired pure dark immersion background
        luxuryCard: '#0F0F12',     // Sleek charcoal tint for structural containers
        luxuryGreen: '#044327',    // The rich, deep forest accent emerald shade
        luxuryMint: '#10B981',     // High-end glowing feedback tint for links
      },
    },
  },
  plugins: [],
};