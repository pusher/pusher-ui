const { resolve } = require('path');


function createExternal (name, globalName) {
  return {
    [name]: {
      commonjs: name,
      commonjs2: name,
      amd: name,
      root: globalName,
    },
  };
}


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
  externals: {
    ...createExternal('react', 'React'),
    ...createExternal('react-dom', 'ReactDOM'),
    ...createExternal('react-router', 'ReactRouter'),
    ...createExternal('react-motion', 'ReactMotion'),
    ...createExternal('react-syntax-highlighter/dist/light', 'ReactSyntaxHighlighterLight'),
    ...createExternal('styled-components', 'StyledComponents'),
    ...createExternal('highlight.js', 'HighlightJS'),
  },
};
