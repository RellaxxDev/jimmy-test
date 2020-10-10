const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    mode: "development",
    devtool: 'source-map',
    devServer: {
        contentBase: "./dist",
        hot: true,
        open: 'Google Chrome',
        historyApiFallback: true,
        port: 9000
    }
});
