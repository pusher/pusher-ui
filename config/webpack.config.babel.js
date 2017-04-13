import { resolve } from 'path';


function createExternals (names) {
  return names.reduce((accumulator, name) => {
    accumulator[name] = name; // eslint-disable-line no-param-reassign
    return accumulator;
  }, {});
}


export default {
  entry: {
    'pusher-ui': './src',
  },
  output: {
    path: resolve('./build'),
    filename: '[name].js',
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
          presets: [
            ['es2015', { modules: false }],
            'stage-0',
            'react',
          ],
          plugins: [
            ['styled-components', {
              minify: true,
            }],
          ],
        },
      },
    ],
  },
  resolve: {
    modules: ['./node_modules/', './src'],
  },
  externals: createExternals([
    'highlight.js/lib/languages/java',
    'highlight.js/lib/languages/javascript',
    'highlight.js/lib/languages/swift',
    'highlight.js/lib/languages/xml',
    'react',
    'react-dom',
    'react-motion',
    'react-router',
    'react-syntax-highlighter/dist/light',
    'react-syntax-highlighter/dist/styles/github-gist',
    'styled-components',
  ]),
};
