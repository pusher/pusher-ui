import { resolve } from 'path';
import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

function createExternals(names) {
  return names.reduce((accumulator, name) => {
    accumulator[name] = name; // eslint-disable-line no-param-reassign
    return accumulator;
  }, {});
}

function devProd(inDevelopment, inProduction) {
  return process.env.NODE_ENV === 'production' ? inProduction : inDevelopment;
}

export default {
  entry: {
    'pusher-ui': './src',
  },
  output: {
    path: resolve('./build'),
    filename: devProd('[name].js', '[name].min.js'),
    library: 'PusherUI',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['es2015', { modules: false }], 'stage-0', 'react'],
          plugins: devProd(
            ['glamorous-displayname'],
            ['transform-react-remove-prop-types'],
          ),
        },
      },
    ],
  },
  resolve: {
    modules: ['./node_modules/', './src'],
  },
  externals: devProd(
    [],
    createExternals([
      'glamor',
      'glamorous',
      'highlight.js',
      'polished',
      'prop-types',
      'react',
      'react-dom',
      'react-motion',
      'react-router',
      'react-syntax-highlighter',
    ]),
  ),
  plugins: devProd(
    [new webpack.NamedModulesPlugin(), new webpack.NoEmitOnErrorsPlugin()],
    [
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new UglifyJSPlugin(),
    ],
  ),
};
