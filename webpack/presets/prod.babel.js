const baseConfig = require('./base.js').default
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin');

const pluginsProd = [
    new webpack.optimize.AggressiveMergingPlugin(),
    new LodashModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new Visualizer({filename: './statistics.html'})
]

baseConfig.stats = {children: false}                                // more
baseConfig.mode = 'production'                                      // serve mode
baseConfig.plugins.join(pluginsProd)                                // add production plugins
baseConfig.optimization.minimize = true
baseConfig.performance = {
    hints: "warning", // "error" or false are valid too
    maxEntrypointSize: 100_000, // in bytes, default 250k
    maxAssetSize: 400_000, // in bytes
}

export default baseConfig
export {pluginsProd}
