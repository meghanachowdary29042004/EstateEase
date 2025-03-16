/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Specifies the files Tailwind should scan for class names
  theme: {
    extend: {}, // Allows customization of the default Tailwind theme
  },
  plugins: [], // No additional plugins (e.g., @tailwindcss/line-clamp) are being used
};
