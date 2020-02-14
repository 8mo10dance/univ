const path = require('path')

module.exports = {
  entry: './app/index.tsx',
  output: {
    path: `${__dirname}/../app/assets/javascripts/webpack/`,
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [
      path.resolve(__dirname, 'app'),
      path.resolve(__dirname, 'app/glee_manages'),
      'node_modules',
    ],
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
