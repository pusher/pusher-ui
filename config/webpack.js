const { resolve } = require('path');


module.exports = {
  entry: {
    'pusher-ui': './src',
  },
  output: {
    path: resolve('./build'),
    filename: '[name].js',
    library: 'pusher-ui',
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
        },
      },
    ],
  },
  resolve: {
    modules: ['./node_modules/', './src'],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
      root: 'styledComponents',
    },
    'react-router': {
      commonjs: 'react-router',
      commonjs2: 'react-router',
      amd: 'react-router',
      root: 'reactRouter',
    },
    'react-motion': {
      commonjs: 'react-motion',
      commonjs2: 'react-motion',
      amd: 'react-motion',
      root: 'reactMotion',
    },
    'react-syntax-highlighter': {
      commonjs: 'react-syntax-highlighter',
      commonjs2: 'react-syntax-highlighter',
      amd: 'react-syntax-highlighter',
      root: 'reactSyntaxHighlighter',
    },
    'highlight.js': {
      commonjs: 'highlight.js',
      commonjs2: 'highlight.js',
      amd: 'highlight.js',
      root: 'highlightJs',
    }
  },
};
