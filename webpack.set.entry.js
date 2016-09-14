/**
 * Created by Nonjene on 16/9/15.
 */
const fs = require('fs');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIR_SRC = './src/';
var aDirName = [];
var entry = {};
var htmlDeclare = [];

fs.readdirSync(DIR_SRC).forEach(dir=> {
    if (fs.statSync(DIR_SRC + dir).isDirectory()) {
        aDirName.push(dir);
        entry[dir] = path.resolve(__dirname, DIR_SRC + dir + '/index.js');
        htmlDeclare.push(
            new HtmlWebpackPlugin({
                filename: dir + '/index.html',
                template: DIR_SRC + 'index.tpl.html',
                chunks: [dir],
                inject: 'body',
                hash: true
            })
        )
    }
});

module.exports = {
    module: aDirName,
    entry,
    htmlDeclare
};