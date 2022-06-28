/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
     // Add our own variants for convenience
     plugin(({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('group-hocus', [
        ':merge(.group):focus &',
        ':merge(.group):hover &',
      ]);
      addVariant('children', '& > *');
    }),

    // 3rd Party Plugins;
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
