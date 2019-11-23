const path = require('path')

module.exports = {
  entry: './app/index.tsx',
  output: {
    path: `${__dirname}/../app/assets/javascripts/webpack/`,
    filename: '[name].js',
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'app'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        include: [path.resolve(__dirname, 'app')],
        exclude: /node_modules/,
      },
    ],
  },
}
