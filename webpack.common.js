const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "asset/resource",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/*.DS_Store"],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/another.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "another.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/company.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "company.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/analysis.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "analysis.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/contact.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "contact.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/industry.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "industry.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/news.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "news.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/products.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "products.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/references.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "references.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/research.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "research.html",
    }),
  ],
};
