// webpack v4
const path = require('path');
// update from 23.12.2018
// const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    // target: 'node', // update from 23.12.2018
    // externals: [nodeExternals()], // update from 23.12.2018
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: __dirname + 'node_modules',
            include: __dirname + 'src',
            options: {
                presets: ['env']
            }
        }]
    },

    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};