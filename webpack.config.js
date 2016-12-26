var webpack = require('webpack')
var path = require('path')

module.exports = {
    devtool: 'inline-source-map',
    context: __dirname,
    entry: [
        "webpack-dev-server/client?http://127.0.0.1:8080/",
        "./src/",
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    output: {
        filename: "./dist/bundle.js",
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['react-hot-loader','babel-loader?presets[]=react,presets[]=es2015'],
        }
      ],
    },
};
