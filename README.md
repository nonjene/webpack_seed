#Webpack Seed

This seed is for multiple pages output.

## Contains
* It can output every sub bundles from each children Dir in '/src', each also include index.html as entry, generated by HtmlWebpackPlugin.
* CSS and img tag's image can be imported by js as modules.
* Within loaders: 
    - scss
    - Autoprefixer
    - handlebars
    - es6
* Plugins: 
    - HtmlWebpackPlugin
    - ExtractTextPlugin
    - LiveReloadPlugin


## Setup
```
$ git clone https://github.com/nonjene/webpack_seed.git
$ npm install
```


## Auto reload:
```
$ npm run watch
```

## Build:
```
$ npm run build
```