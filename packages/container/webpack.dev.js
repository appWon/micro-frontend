const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

const devServer = {
  static: {
    directory: path.join(__dirname, "dist"),
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  port: 3000,
};

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer,
});
