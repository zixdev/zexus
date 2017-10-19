let mix = require('laravel-mix');

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

mix.webpackConfig({
    resolve: {
        alias: {
            '@zix-core': path.resolve('./plugins/Core/Assets/admin/js'),
            '@zix-base': path.resolve('./plugins')
        }
    }
});

mix.js('resources/assets/admin/js/admin.js', 'public/assets/admin/js')
   .stylus('resources/assets/admin/stylus/admin.styl', 'public/assets/admin/css');
