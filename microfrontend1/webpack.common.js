const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './angular-app.ts'),
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'angular-app.html',
            template: './src/angular-app.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './index.html'),
            inject: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            }
        ]
    }
};
