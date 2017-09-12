import { join, resolve } from 'path';
import webpack from 'webpack';
import HTMLPlugin from 'html-webpack-plugin';

export default {
  entry: {
    demos: './src/demos',
  },
  output: {
    path: resolve('./build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['es2015', { modules: false }], 'stage-0', 'react'],
          plugins: ['glamorous-displayname'],
        },
      },
    ],
  },
  resolve: {
    modules: ['./node_modules/', './src'],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HTMLPlugin({
      title: 'Pusher UI',
    }),
  ],
  devServer: {
    contentBase: join(__dirname, 'build'),
    port: 9191,
  },
};
