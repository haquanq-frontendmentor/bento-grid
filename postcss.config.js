/** @type {import('postcss-load-config').Config} */
module.exports = {
    plugins: [require("postcss-import"), require("cssnano"), require("autoprefixer")],
};
