const path = require('path')
const nodeExternals = require('webpack-node-externals')
const areWeInProduction = process.env.NODE_ENV === 'production'
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  mode: areWeInProduction ? 'production' : 'development',
  entry: './src/index.ts',
  target: 'node',
  devtool: areWeInProduction ? '' : 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  plugins: [
    new NodemonPlugin({ ext: 'ts,js,hbs,json' }),
  ],
  resolve: {
    extensions: ['.ts', '.js'], //resolve all the modules other than index.ts
    alias: {
      '@': path.resolve('./src/'),
    },
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.ts?$/,
      },
    ],
  },
}
