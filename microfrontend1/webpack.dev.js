const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    output: {
        filename: 'test.js',
    },
    devServer: {
        port: 4300,
    },
    devtool: 'inline-source-map',
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         filename: 'angular-app.html',
    //         template: './src/angular-app.html',
    //         inject: false
    //     }),
    //     new HtmlWebpackPlugin({
    //         filename: 'index.html',
    //         template: path.resolve(__dirname, './index.html'),
    //         inject: false
    //     })
    // ]
});
