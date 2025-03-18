// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }