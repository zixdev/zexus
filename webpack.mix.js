const {mix} = require('laravel-mix');
const PathOverridePlugin = require('path-override-webpack-plugin');
const Modules = require('./plugins/plugins.json');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const APP_NAME = "test";
let aliases = {};
let plugins = [];

Object.keys(Modules).map(function(module, index) {
    if(Modules[module].status) {
        aliases["@zix-" + module.toLocaleLowerCase()] = path.resolve('./plugins/' + module + '/Assets');
        plugins.push(new PathOverridePlugin(new RegExp('@zix-' + module.toLocaleLowerCase()), path.resolve('./resources/assets/js/' + APP_NAME + '/' + module.toLocaleLowerCase())));
    }
});


mix.webpackConfig({
    resolve: {
        alias: aliases
    },
    plugins: plugins
});

mix.react('resources/assets/js/main.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
