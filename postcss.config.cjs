/* a plugin use to make sure CSS works accross diffrent browswers*/
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};
