const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
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

const federation = {
  name: "container",
  remotes: {
    remote_service1: "service_1@http://localhost:3002/remoteEntry.js",
  },
};

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer,
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  plugins: [
    new ModuleFederationPlugin(federation),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
