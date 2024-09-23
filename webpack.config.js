const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackRemoveEmptyScript = require("webpack-remove-empty-scripts");
const WebpackCopyPlugin = require("copy-webpack-plugin");

/** @type { import('webpack').Configuration } */
module.exports = {
  mode: "development",
  entry: "./src/styles/main.css",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        exclude: path.resolve(__dirname, "node_modules"),
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
  },
  plugins: [
    new WebpackRemoveEmptyScript(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new WebpackCopyPlugin({
      patterns: [
        {
          from: "./src/assets/",
          to: "assets/",
        },
      ],
    }),
  ],
};
