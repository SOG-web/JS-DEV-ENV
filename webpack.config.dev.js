import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  target: "web",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./src",
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true,
    }),
  ],
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "[name].bundle.js",
  },
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      { test: /\.css$/i, loaders: ["style", "css"] },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: "url-loader",
        options: {
          limit: 8192,
        },
      },
    ],
  },
};
