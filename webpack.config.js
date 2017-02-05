var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'react-hot', 'babel' ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css|\.less$/,
        loaders: [ 'style-loader', 'css-loader', 'less-loader' ],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  devServer: {
    //// Setup your own Express middleware/handlers.
    // setup: function(app){
    //   var api = require('./api')
    //   app.use(api)
    //   app.get('/asdf', function(req, res) {
    //     res.json({message: 'okay'})
    //   })
    // }

    // // Proxy to other services: curl localhost:8080/api/** -> localhost:3000/**
    // proxy: [{
    //   context: ['/api/**'],
    //   target: 'http://localhost:3000',
    //   secure: false
    // }]
  }
};
