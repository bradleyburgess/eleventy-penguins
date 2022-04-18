module.exports = {
  ci: {
    collect: {
      staticDistDir: "_site"
    },
    assert: {
      preset: "lighthouse:no-pwa"
    }
  }
};
