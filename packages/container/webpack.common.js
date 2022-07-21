const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const federation = {
  name: "container",
  remotes: {
    remote_service1: "service_1@http://localhost:3001/remoteEntry.js",
  },
};

module.exports = {
  entry: "./src/index.js",
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
