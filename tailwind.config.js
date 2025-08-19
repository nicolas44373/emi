// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // gradientes/colores que usas en clases dinámicas
    'from-pink-400','via-rose-400','to-fuchsia-500',
    'from-rose-100','via-white','to-rose-100',
    'from-pink-500','via-rose-500','to-fuchsia-500',
    'from-amber-400','via-rose-500','to-fuchsia-500',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
