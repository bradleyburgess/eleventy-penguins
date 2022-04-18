const path = require("path");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = "100vw") {
  let metadata = await Image(src, {
    widths: [600, 1200, 1800, 2400, 3000, null],
    formats: ["webp", "jpeg"],
    outputDir: path.join("_site", "img"),
    urlPath: "/img/"
  });

  let imageAttributes = {
    alt,
    sizes,
    decoding: "async"
  };

  console.log(metadata.webp[0]);

  const result = Image.generateHTML(metadata, imageAttributes);
  return result;
}

module.exports = imageShortcode;
