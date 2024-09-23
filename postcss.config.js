/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("cssnano"),
    require("autoprefixer"),
    require("postcss-sort-media-queries")({
      sort: "mobile-first",
    }),
  ],
};
