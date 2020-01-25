const path = require('path')

module.exports = {
  entry: {
    'digiweb/bundle': './app/digiweb/index.tsx',
    'glee_manages/bundle': './app/glee_manages/index.js',
  },
  output: {
    path: `${__dirname}/../app/assets/javascripts/webpack/`,
    filename: '[name].js',
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'app/digiweb'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        include: [path.resolve(__dirname, 'app')],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
}
