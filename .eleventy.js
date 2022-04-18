const imageShortcode = require("./11ty/shortcodes/image");

module.exports = (config) => {
  config.addPassthroughCopy({ "src/css": "css" });
  config.addNunjucksAsyncShortcode("image", imageShortcode);
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
