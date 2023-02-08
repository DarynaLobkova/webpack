const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            }, ]  },
};
