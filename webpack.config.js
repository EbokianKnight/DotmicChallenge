const path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    'babel-polyfill',
    './src/index',
  ],
  output: {
    path: './assets/javascript',
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: path.join(__dirname, 'src'),
        exclude: /bundle\.js$/,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './src',
  },
  debug: true,
};
