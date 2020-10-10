const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(js)?$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["dist"]
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: `${__dirname}/dist/index.html`,
            template: path.resolve(__dirname, './src/index.html')
        })
    ]
};
