const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

const port = process.env.PORT || 8080;

module.exports = (env) => {
  const isProduction = env === "production";
  console.log(env);
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "js/[name].[hash].bundle.js"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, //2. Extract css into files
            "css-loader", //1. Turns css into commonjs
            "postcss-loader" // Necessary for autoprefixer
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader, //3. Extract css into files
            "css-loader", //2. Turns css into commonjs
            "postcss-loader", // Necessary for autoprefixer
            "sass-loader" //1. Turns sass into css
          ]
        }
      ]
    },
    devServer: {
      // This is necessary for react-route-dom to work
      contentBase: path.join(__dirname, "dist"),
      historyApiFallback: true, // this prevents the default browser full page refresh on form submission and link change
      port: port
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/assets/favicon/favicon.ico",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new MiniCssExtractPlugin({ filename: "css/[name].[contentHash].css" }),
      new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [autoprefixer()]
        }
      }),
      new CleanWebpackPlugin()
    ],
    devtool: isProduction ? false : "inline-source-map"
  };
};
