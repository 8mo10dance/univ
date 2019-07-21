const path = require('path')

module.exports = {
  entry: {
    'digiweb/bundle': './app/digiweb/index.tsx',
  },
  output: {
    path: `${__dirname}/../app/assets/javascripts/webpack/`,
    filename: '[name].js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
}
