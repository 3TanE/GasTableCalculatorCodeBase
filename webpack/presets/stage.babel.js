const baseConfig = require('./base.js')
const devConfig = require("./dev.babel.js")
const prodConfig = require("./prod.babel.js")

const config = baseConfig.default

config.devServer = devConfig.devServer                          // add hot-load server
config.devServer.headers['cache-control'] = 'max-age=3600'      // enable caching (1h)
config.devServer.compress = true                                // enable gzip
config.mode = 'production'                                      // serve mode
config.resolve.alias = {'react-dom': '@hot-loader/react-dom'}   // hot loader
config.devtool = 'inline-source-map'                            // adv. logging
config.plugins.join(devConfig.plugins)                          // add dev plugins
config.plugins.join(prodConfig.plugins)                         // add production plugins
config.optimization.minimize = true                             // minimize JS and CSS


export default config;
