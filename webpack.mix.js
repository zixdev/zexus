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

Object.keys(Modules).map(function (module, index) {
    if (Modules[module].status) {
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

mix
    .react('resources/assets/admin/main.js', 'public/assets/admin/js/app.js')
    .react('resources/assets/default/main.js', 'public/assets/default/js/app.js');


if (mix.inProduction()) {
    mix.version();
}