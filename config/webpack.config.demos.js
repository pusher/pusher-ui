const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const StatefulContainerPlugin = require('stateful-react-container-webpack-plugin');


module.exports = {
  entry: {
    demos: './src/demos',
  },
  output: {
    path: path.resolve('./build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }],
            'stage-0',
            'react',
          ],
        },
      },
    ],
  },
  resolve: {
    modules: ['./node_modules/', './src/'],
  },
  plugins: [
    new HtmlPlugin({ title: 'Pusher UI Demos' }),
    new StatefulContainerPlugin(),
  ],
};
