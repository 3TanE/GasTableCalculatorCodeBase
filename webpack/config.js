// This config file sets all variables for a quick and easy webpack configuration
// with the necessary configuration files pre-configured.
//
// ------------------------------------------------------------------------------
// NPM COMMANDS (pre-defined in package.json)
// ------------------------------------------------------------------------------
//
//      npm start (development server)
//          - Hot-reload on changes in ./src
//          - Source mapping
//      npm run staging (staging/testing server)
//          - Hot-reload on changes in ./src
//          - Source mapping
//          - Gzip
//          - Minify JS
//          - Minify CSS/SCSS/SASS
//      npm run production (production compiler)
//          - Gzip
//          - Minify JS
//          - Minify CSS/SCSS/SASS
//
//
// ------------------------------------------------------------------------------
// ABOUT THE BUNDLE BEHAVIOR / RESOURCE REQUEST BEHAVIOR
// ------------------------------------------------------------------------------
//
// If you wish to achieve a specific bundle behavior, feel free to tweak the
// given options below. The bundle behavior by default works as follows:
//
// Let's assume we have two entry points "__main" and "__page2" for example.
// The first one is triggered by calling "index.html" and loads itself, along
// with its dependencies, and the dependencies that are shared among multiple
// entry point (such as react, react-dom, etc.). If an import() statement calls
// a new component, this component will be loaded along with its own dependencies.
//
// Assuming that "__main" and "page2" have dependencies in common, the page will
// request the following files from the web server:
//
//      Entry point source code          __main.(js|css)
//      Entry point dependencies         vendors~__main.(js|css)
//      Shared source code               __page2~__main.(js|css)
//      Shared dependencies              vendors~__page2~__main.(js|css)
//
// Now, if we load an additional component "Component1", the following files may load
//
//      Component source code            Component1.(js|css)
//      Component dependencies           vendors~Component1.(js|css)
//
// If there were other shared styles or script dependencies among Component1 and __main,
// or any other component/entry point, these would have been loaded here as well.
//
//

const path = require('path')


const bundleVendors = false         // all node_modules dependencies in one chunk
const splitVendors = false          // one chunk for each node_modules dependency
const bundleStyles = false          // all CSS rules/files in one chunk

// Entries for separate pages etc. (names must be unique)
const entryPoints = {
    'main.entry': [path.resolve('./src/index')],
}

// HTML files to generate from given entries
const htmlPages = [
    {
        template: path.resolve('./src/public/index.html'),
        chunks: ['main.entry'],
        filename: 'index.html'
    }
]


export {bundleStyles, splitVendors, bundleVendors, htmlPages, entryPoints}
