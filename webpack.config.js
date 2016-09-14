const path = require('path');

const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const Set = require('./webpack.set.entry');

var CSS_Module_Loader_Pargram;


var plugins = [new ExtractTextPlugin("[name]/main.css"),...Set.htmlDeclare];

if (process.env.NODE_ENV === 'production') {
    console.log('export NODE_ENV=production');

    plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        })
    );
    CSS_Module_Loader_Pargram = '?modules&importLoaders=1&localIdentName=[hash:6]';

} else {
    console.log('export NODE_ENV=development');
    plugins.push(
        //live reload
        new LiveReloadPlugin({
            port: 35729,
            appendScriptTag: true,
            ignore: null
        })
    );
    CSS_Module_Loader_Pargram = '?modules&importLoaders=1&localIdentName=[path]__[name]__[local]__[hash:3]';

}

module.exports = {
    entry: Set.entry,
    output: {
        path: path.join(__dirname, "/build/"),
        filename: "[name]/bundle.js",
        publicPath: "../",
        chunkFilename: "[name].chunk.min.js"

    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style?sourceMap',
                    'css' + CSS_Module_Loader_Pargram +
                    '!postcss' +
                    '!resolve-url' +
                    '!sass?sourceMap'
                )
            }, {
                test: /\.css$/,
                include: /(lib|node_modules)/,
                loader: ExtractTextPlugin.extract('style?sourceMap', 'css')
            },
            {test: /\.png|gif$/, loader: "url-loader?limit=4000&name=img/[name]_[hash:6].[ext]"},
            {test: /\.jpg$/, loader: "file-loader?&name=img/[name]_[hash:6].[ext]"},
            {test: /\.handlebars$/, loader: "handlebars-loader"},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }

        ]
    },
    plugins: plugins,
    postcss: function () {
        return [autoprefixer];
    }
};
