const CleanWebpackPlugin = require('clean-webpack-plugin');

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
    open: true, // Open the page in browser,
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

// DONT USE INLINE CSS
// Even though there is a nice build set up now, where did all the CSS go? As per configuration, it has been inlined to JavaScript! Even though this can be convenient during development, it doesn't sound ideal.
//
// The current solution doesn't allow cache CSS. You can also get a Flash of Unstyled Content (FOUC). FOUC happens because the browser takes a while to load JavaScript and the styles would be applied only then. Separating CSS to a file of its own avoids the problem by letting the browser to manage it separately.
