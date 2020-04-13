const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'production',
    entry: "./src/client/index.js",
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: '/node/modules/',
                loader: "babel-loader",
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}