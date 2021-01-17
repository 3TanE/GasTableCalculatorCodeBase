const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

const {bundleVendors, splitVendors, bundleStyles, htmlPages, entryPoints} = require('../config')


let htmlPlugins = htmlPages.map((page) => new HtmlWebpackPlugin(page))


let base = {
    stats: 'minimal',
    mode: 'development',
    entry: entryPoints,
    resolve: {
        alias: undefined,
        extensions: ['.js', '.jsx'],
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: path.resolve('./build'),
        chunkFilename: 'chunks/[name].js',
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 1,
            cacheGroups: {
                ...(
                    (bundleVendors || splitVendors) ? {
                        vendor: (bundleVendors ? {test: /[\\/]node_modules[\\/]/, name: 'vendor.bundle'} :
                            {
                                test: /[\\/]node_modules[\\/]/, name: (module) => {
                                    const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                                    return `vendor/${packageName.replace('@', '')}~vendor`;
                                }
                            })
                    } : {}),
                ...(bundleStyles ? {
                    styles: {
                        name: 'styles',
                        test: /\.(s?css|sass)$/,
                        chunks: 'all',
                        minChunks: 1,
                        reuseExistingChunk: true,
                        enforce: true,
                    }
                } : {}),
            },
        },
        minimize: false,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                sourceMap: false,
                parallel: true,
            })
        ],
    },
    module: {
        rules: [
            {
                test: /\.(woff(2)?|ttf|eot|png|jpe?g|gif|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(s?css|sass)$/,                        // mark css files for bundling (npm i style-loader css-loader)
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],    // specify a specific bundle-agent to use for css
            },
        ],
    },
    plugins: []
};

base.plugins = [
    ...htmlPlugins,
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
        __DEVELOPMENT__: base.mode === 'development',
        __STAGING__: base.mode === 'staging',
        __PRODUCTION__: base.mode === 'production',
    }),
    new CopyPlugin({
        patterns: [
            {from: "./src/manifest.json", to: "manifest.json"},
            {from: "./src/favicon.ico", to: "favicon.ico"},
            {from: "./src/icons", to: "icons"},
            {from: "./src/serviceworker.js", to: "serviceworker.js"},
        ],
    }),
];


export default base;
