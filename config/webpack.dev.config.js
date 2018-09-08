const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  context: path.resolve(__dirname, "../src"),
  entry: {
    main: ["./js/index.js"]
  },
  mode: "development",
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../dist/"),
    publicPath: "/"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../src"),
    overlay: true,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: path.resolve(__dirname)
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["./node_modules"]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader",
            options: {
              attrs: ["img: src"]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["transform-es2015-arrow-functions"]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};
