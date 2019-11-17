const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    context: __dirname + '/env/client/themes/default/src/',
    entry: {
        main: './js/pages/index/index.js',
        about: './js/pages/about/about.js',
        'styles-index': './scss/pages/index/index.scss',

        'animation-perever': './js/pages/animation/perever/index.js',
        'styles-animation-perever': './scss/pages/animation/perever/index.scss',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public/client/js')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./../css/[name].css"
        })
    ].concat(),
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, ""),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            sourceMap: true,
                            plugins: () => [
                                require("cssnano")({
                                    preset: [
                                        "default",
                                        {
                                            discardComments: {
                                                removeAll: true
                                            }
                                        }
                                    ]
                                })
                            ]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
}

