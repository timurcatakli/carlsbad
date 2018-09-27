const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

exports.minifyCSS = () => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true,
      }),
    ],
  },
});

// exports.minifyCSS = ({ options }) => ({
//   plugins: [
//     new OptimizeCSSAssetsPlugin({
//       cssProcessor: cssnano,
//       cssProcessorOptions: options,
//       canPrint: false,
//     }),
//   ],
// });

exports.minifyJavaScript = () => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
      }),
    ],
  },
});

exports.attachRevision = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
  ],
});

exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});

exports.setMode = mode => ({
  mode,
});

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        include,
        exclude,
        use: {
          loader: 'url-loader',
          options,
        },
      },
    ],
  },
});

exports.loadSvgs = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        include,
        exclude,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
});

// Autoprefixing solves this problem.
// It can be enabled through PostCSS and the autoprefixer plugin.
// autoprefixer uses Can I Use service to figure out which rules should be prefixed and its behavior can be tuned further.
exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => [require('autoprefixer')()],
  },
});

exports.bundleAnalyzer = () => ({
  plugins: [new BundleAnalyzerPlugin()],
});

exports.clean = path => ({
  plugins: [
    new CleanWebpackPlugin(path, {
      exclude: ['index.html'],
      verbose: true,
      dry: false,
    }),
  ],
});

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    // Display only errors to reduce the amount of output.
    stats: 'errors-only',
    clientLogLevel: 'error',
    // This section is for everyone who ran into this problem in development using
    // webpack-dev-server.. Just as above, what we need to do it tell Webpack Dev Sever
    // to redirect all server requests to /index.html. There are just two properties
    // in your webpack config you need to set to do this, publicPath and historyApiFallback.
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: options.host || "0.0.0.0";
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: false, // Open the page in browser,
    // WDS provides an overlay for capturing compilation related warnings and errors:
    overlay: true,
  },
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,

        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

exports.loadLess = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.less$/,
        include,
        exclude,

        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
});

exports.extractCSS = ({ include, exclude, use = [] }) => {
  // Output extracted CSS to a file
  const plugin = new MiniCssExtractPlugin({
    filename: 'styles/[name].css',
  });
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: [MiniCssExtractPlugin.loader].concat(use),
        },
      ],
    },
    plugins: [plugin],
  };
};
// DONT USE INLINE CSS
// Even though there is a nice build set up now, where did all the CSS go? As per configuration, it has been inlined to JavaScript! Even though this can be convenient during development, it doesn't sound ideal.
//
// The current solution doesn't allow cache CSS. You can also get a Flash of Unstyled Content (FOUC). FOUC happens because the browser takes a while to load JavaScript and the styles would be applied only then. Separating CSS to a file of its own avoids the problem by letting the browser to manage it separately.
