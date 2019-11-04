const path = require('path');

module.exports = {
    target: 'web',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devServer: {
        contentBase: './',
        port: 5000
    },
    devtool: 'source-map'
}