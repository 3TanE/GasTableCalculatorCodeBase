const baseConfig = require('./base.js')
const webpack = require("webpack")


const pluginsDev = [
    new webpack.LoaderOptionsPlugin({debug: true}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({
        filename: '[name].js.map',
        exclude: ['*vendor*']
    })
]


const devServer = {
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    compress: false,
    port: 8080,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
}


const config = baseConfig.default


config.devServer = devServer
config.mode = 'development'                                     // serve mode
config.resolve.alias = {'react-dom': '@hot-loader/react-dom'}   // hot loader
config.devtool = 'inline-source-map'                            // adv. logging
config.plugins.join(pluginsDev)                                 // add dev plugins
config.optimization.minimize = false

export default config
export {pluginsDev, devServer}
