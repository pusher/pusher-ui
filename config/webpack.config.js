module.exports = {
  entry: {
    'pusher-ui': './src',
  },
  output: {
    path: './build',
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
    modules: ['./node_modules/', './src/'],
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
  },
};
