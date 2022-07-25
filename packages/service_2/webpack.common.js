const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

const federation = {
  name: "service_1",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx",
  },
  shared: {
    ...deps,
    react: {
      eager: true,
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      eager: true,
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
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
