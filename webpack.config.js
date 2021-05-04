const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.ttf$/,
                loader: 'file-loader',
                options: {
                    name: '/assets/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {template: './src/index.html'}
        ),
        new MiniCssExtractPlugin(
            {filename: './assets/style/style.css'}
        ),
        new CopyWebpackPlugin({
            patterns: [
              { from: './src/assets/fonts', to: './assets/fonts' },
            ],
        }),
    ]
}