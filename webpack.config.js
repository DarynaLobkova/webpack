const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output:  {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js",
    },
    module: {
        rules: [ {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:{ loader: "babel-loader"}
        },
          {
        test: /\.s[ac]ss$/i,
        use: [ MiniCssExtractPlugin.loader, "css-loader",  "sass-loader"],
      },]
    },
    plugins: [new MiniCssExtractPlugin({
         filename: "styles.css",
    }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
    port: 9000,
  },
    
};
