/**
 * Created by Nonjene on 16/9/15.
 */
var css = require('./index.scss');
var img = {
    example: require('./img/example.jpg')
};
var tpl = require('./main.handlebars');

document.getElementById('container').innerHTML = tpl({css, img});