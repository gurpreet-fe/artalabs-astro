/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Archivo", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {},
  },
  plugins: [],
};
