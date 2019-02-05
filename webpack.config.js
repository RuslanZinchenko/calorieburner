const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
// require("html-loader?interpolate!./index.html");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.html$/, // tells webpack to use this loader for all ".html" files
        loader: 'html-loader'
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        //use: ["file-loader"],
          loader: "file-loader",
        options: {
          name: "./img/[name].[ext]"
        },
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        use: ["handlebars-loader"],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("build"),
    new HtmlWebpackPlugin({
      hash: true,
      template: '!!html-loader?interpolate!./public/index.html',
      // template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    quiet: false,
    stats: "errors-only",
    clientLogLevel: "warning",
    compress: true,
    port: 9000
  }
};
