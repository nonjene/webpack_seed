/**
 * Created by Nonjene on 16/9/15.
 */
const css = require('./index.scss');
const tpl = require('./main.handlebars');

document.getElementById('container').innerHTML = tpl({css: css});