/* eslint-disable import/no-dynamic-require */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lobster': ['Lobster', 'Lobster Two', 'cursive'],
        'open-sans': ['Open Sans', 'sans'],
      },
    },
  },
  plugins: [
    // Add our own variants for convenience
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('group-hocus', [
        ':merge(.group):focus &',
        ':merge(.group):hover &',
      ]);
      addVariant('children', '& > *');
      addVariant('children-hover', '& > *:hover');
      addVariant('children-hocus', '& > *:hover, & > *:focus');
    }),

    // Custom plugins.
    plugin(function ({ addUtilities }) {
      addUtilities({
        // https://projects.verou.me/css3patterns/#carbon
        '.tbg-carbon': {
          background: 'linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px, linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px, linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px, linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px, linear-gradient(90deg, #1b1b1b 10px, transparent 10px), linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)',
          backgroundColor: '#131313',
          backgroundSize: '20px 20px',
        },
        // https://projects.verou.me/css3patterns/#carbon-fibre
        '.tbg-carbon-fibre': {
          background: 'radial-gradient(black 15%, transparent 16%) 0 0, radial-gradient(black 15%, transparent 16%) 8px 8px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px',
          backgroundColor: '#282828',
          backgroundSize: '16px 16px',
        },
        '.tbg-carbon-fibre-blue': {
          background: 'radial-gradient(black 15%, transparent 16%) 0 0, radial-gradient(black 15%, transparent 16%) 8px 8px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px',
          backgroundColor: '#0369a1',
          backgroundSize: '16px 16px',
        },
        '.text-shadow': {
          textShadow: '2px 2px 5px #111',
        },
        '.text-shadow-2': {
          textShadow: '1px 1px 3px #000',
        },
        '.classy-hover': {
          position: 'relative',
          zIndex: 2,
          '&::before': {
            content: '" "',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            transform: 'scaleX(0)',
            inset: '0 0 0 0',
            background: '#075985',
            transition: 'transform .3s ease',
            transformOrigin: 'bottom right',
            zIndex: -1,
          },
          '&:hover': {
            '&::before': {
              transform: 'scaleX(1)',
              transformOrigin: 'bottom left',
            },
          },
        }
      });
    }),

    // 3rd Party Plugins;
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
