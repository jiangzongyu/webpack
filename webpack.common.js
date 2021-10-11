const path = require('path')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TestWebpackPlugin = require('./test-webpack-plugin')
const TestOrderWebpackPlugin = require('./test-order-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '输出'
        }),
        new TestOrderWebpackPlugin(),
        new TestWebpackPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}