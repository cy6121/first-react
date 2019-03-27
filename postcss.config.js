
const config = {
  plugins: [
    require('postcss-preset-env')({
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
    }),
    require('postcss-import'),
    require('precss'),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(require('cssnano'));
}

module.exports = config;
