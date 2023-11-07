const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      'Midnight_Blue': '#41729F',
      'Blue_Gray': '#5885AF',
      'Dark_Blue': '#274472',
      'Baby_Blue': '#C3E0E5',
      'Black':"#000000",
      'White':"#FFFFFF",
    },
    extend: {
      
    },
    
  },
  plugins: [],
};
