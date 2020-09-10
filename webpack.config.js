const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: {
        index: ['./src/js/index.js', './src/js/loadMore.js']
    },
    output: {
        filename: 'js/[name].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // scss
            {
                test: /\.(sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // 'postcss-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: () => [
                                    require('postcss-preset-env')()
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            // 静态资源
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader'
            },
            // html中的标签
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // include: resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: 'usage',
                                corejs: { version: 3 },
                                targets: {
                                    chrome: '60',
                                    firefox: '60',
                                    ie: '9',
                                    safari: '10'
                                }
                            }
                        ]
                    ]
                }
            },
            // js
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                include: resolve(__dirname, 'src'),
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            }
        ]
    },
    plugins: [
        // html
        new HtmlWebpackPlugin({
            template: './src/views/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        // CSS分离
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        // CSS压缩
        new OptimizeCssAssetsPlugin()
    ],
    mode: 'development',
    resolve: {
        extensions: ['.js'],
        alias: {
            $static: resolve('static')
        }
    },
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        watchContentBase: true,
        watchOptions: {
            // 忽略文件
            ignored: /node_modules/
        },
        open: true,
        port: 5371,
        hot: true,
        compress: true,
        // 使用dev-server的服务模拟假数据
        before(app) {
            app.get('/api/list', (req, res) => {
                const dataList = require('./mock/dataList.js')
                res.json(dataList)
            })
        }
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    }
}