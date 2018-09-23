const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
};

const commonConfig = merge([
  {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      // we are using alias so that antd icons do not bloat the bundle
      // https://github.com/ant-design/ant-design/issues/12011
      alias: {
        '@ant-design/icons/lib/dist$': path.resolve(
          __dirname,
          './src/icons.js',
        ),
      },
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  },
  parts.loadLess(),
]);

const productionConfig = merge([
  parts.bundleAnalyzer(),
  parts.extractCSS({
    use: 'css-loader',
  }),
  parts.clean(PATHS.build),
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadCSS(),
]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};

// To load CSS, you need to use css-loader and style-loader. css-loader goes through possible @import and url() lookups within the matched files and treats them as a regular ES2015 import. If an @import points to an external resource, css-loader skips it as only internal resources get processed further by webpack.
// style-loader injects the styling through a style element. The way it does this can be customized. It also implements the Hot Module Replacement interface providing for a pleasant development experience.
// The matched files can be processed through loaders like file-loader or url-loader, and these possibilities are discussed in the Loading Assets part of the book.
