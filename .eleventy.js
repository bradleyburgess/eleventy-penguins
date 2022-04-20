const imageShortcode = require('./11ty/shortcodes/image');
const envtestShortcode = require('./11ty/shortcodes/envtest');

module.exports = (config) => {
  config.addPassthroughCopy({ 'src/css': 'css' });
  config.addNunjucksAsyncShortcode('image', imageShortcode);
  config.addNunjucksShortcode('envtest', envtestShortcode);
  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
