var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'app.css'
});

module.exports = {
    entry: {
        'vendor': ['angular', 'angular-ui-router', 'angular-material', 'vis', 'angular-animate', 'angular-aria',
            'angular-messages', 'angular-sanitize'
        ],
        'app': './client/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name]_[chunkhash].js',
        publicPath: '/' // for webpack-dev-server output
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'],
                        plugins: ['transform-runtime'],

                    },
                }],
                exclude: /node_modules/
            },

            {
                test: /\.(scss|sass)$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /node_modules[\\\/]vis[\\\/].*\.png$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                    }
                }]
            },
            {
                test: /node_modules[\\\/]vis[\\\/].*\.js$/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ["es2015"],
                    plugins: [
                        "transform-es3-property-literals",
                        "transform-es3-member-expression-literals",
                        "transform-runtime"
                    ]
                }
            },
            {
                test: /node_modules[\\\/]vis[\\\/].*\.css$/,
                use: extractPlugin.extract({
                    use: ['css-loader']
                })
            }
        ]
    },
    devtool: "eval",
    devServer: {
        contentBase: path.join(__dirname, "dev"),
        compress: true,
        port: 9000,
        host: '0.0.0.0',
        historyApiFallback: true,
        disableHostCheck: true,
        proxy: {
            "/api": {
                target: "http://127.0.0.1:9001",
                secure: false
            }
        }
    },
    plugins: [
        extractPlugin,
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: 'client/index.html'
        }),
        new CleanWebpackPlugin(['dist']),

        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            output: {
                comments: false
            },
            compress: {
                warnings: false
            },
            exclude: ['app.bundle.js']
        })
    ]
}