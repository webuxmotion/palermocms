const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const defaultTheme = __dirname + '/env/client/themes/default/';
const src = defaultTheme + 'src/';

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        main: src + './js/pages/index/index.js',
        about: src + './js/pages/about/about.js',
        'styles-index': src + './scss/pages/index/index.scss',

        'animation-perever': src + './js/pages/animation/perever/index.js',
        'styles-animation-perever': src + './scss/pages/animation/perever/index.scss',

        'animation-pixi': defaultTheme + './pages/animation/pixi/js/index.js',
        'styles-animation-pixi': defaultTheme + './pages/animation/pixi/scss/styles.scss',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public/client/js/')
    },
    plugins: [
        new CleanWebpackPlugin({}),

        new MiniCssExtractPlugin({
            filename: "./../css/[name].css"
        }),

        new CopyWebpackPlugin([
            {
                from: defaultTheme + "./pages/animation/pixi/img",
                to: "./../img/animation/pixi",
            },
        ]),


    ],
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

