const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./index.js",
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    assetModuleFilename: "assets/[name][ext]",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "King Crimson",
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./assets"),
          to: path.resolve(__dirname, "dist/assets"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "./style.css",
    }),
  ],
  mode: "development",
};
