# TheClockTwister's Webpack Template

## Project Structure
The following file tree will show you what configs you have at your
disposal and what configurations they contain:
```
/src
|- serviceworker.js     Serviceworker configuration (tune variables)
|- theme.js             MaterialUI themes for dark/light mode
|
|- /public
|  |- index.html        HTML template (edit page title etc.)
|  |- manifest.json     Application information (must-have for PWA support)
|  |- favicon.ico       Tab icon (needs to be .ico format)
|
|- /App
|  |- App.js            Main application (build your application here)
|  |- Loading.js        Loading screen (displayed while app loads in background)

/webpack
|- config.js            Main webpack configuraiton (easy configuration)
|- presets              (don't touch unless you know what you're doing)
   |- base              Webpack base config (shared among dev|stage|prod)
   |- dev.babel.js      Development configuration (npm start)
   |- stage.babel.js    Staging configuration (npm run staging)
   |- prod.babel.js     Production configuration (npm run production)
```

## NPM commands
| npm command           | description                                   | features
|-----------------------|-----------------------------------------------|-----------------------------------
|`npm start`            | Starts the dev server                         | hot-reload, source-maps
| `npm run staging`     | Starts a dev server with production features  | hot-reload, source-maps, gzip, minify CSS, minify JS
| `npm run production`  | Produces a production build in ./dist         | minify CSS, minify JS


## Webpack Configuration
This template comes with a default webpack configuration that will fit most projects needs (if not, you may want
to over-think your project structure and layout). The only thing that should be edited under normal circumstances
is the `./webpack/config.js`, which holds basic routing information if you want to create multiple entry points.

### Options in `./webpack/config.js`

#### Code splitting
By default, webpack will split all .js|.jsx and .css|.scss|.sass files per entry point and per import stage.
This offers the highest efficiency in terms of transmitted data and should only be changed for debugging.

Using the following options listed below, you may easily edit the default splitting behavior of this template:

| variable        | description                               
|-----------------|---------------------------------------------
| `bundleVendors` | Bundles all node_modules .js dependencies into one .js file                       
| `splitVendors`  | Splits all node_modules dependencies into separate .js files
| `bundleStyles`  | Bundles all .css files into one .css file

#### Entry points & routing
The default config only configures one single entry point pointing to `./src/index`. If you want to add a second
entry point for another .html file, you can just add a similar entry in the `entryPoints` variable and add the desired
.html output rule in the `htmlPages` variable below.

Webpack will then create an HTML file for every entry in `htmlPages` and load the connected entry points that were
specified. This will then load the React component connected to that entry point in `entryPoints` and renders it.
