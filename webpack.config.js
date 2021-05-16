const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: 'development', //production
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: './'
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        historyApiFallback: true
        // proxy: {
        //     '/views': {
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/views': '/'
        //         }
        //     }
        // }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(jpg|png|jpeg|gif|ttf|eot|woff|woff2|svg)$/,
            loader: "url-loader"
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        "component",
                        {
                            "libraryName": "element-ui",
                            "styleLibraryName": "theme-chalk"
                        }
                    ]
                ]
            }
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: 'favicon.ico',
            hash: true,
            inject: 'body'
        })
    ]
}