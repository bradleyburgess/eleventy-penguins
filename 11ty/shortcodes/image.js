const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = "100vw") {
  let metadata = await Image(src, {
    widths: [600, 1200, 1800, 2400, 3000, null],
    formats: ["webp", "jpeg"]
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };

  const result = Image.generateHTML(metadata, imageAttributes);
  console.log(metadata);
  return result;
}

module.exports = imageShortcode;
