const path = require(`path`);
const autoprefixer = require(`autoprefixer`);

const styleRule = {
  test: /\.css$/i,
  use: [
    `style-loader`,
    {
      loader: `css-loader`,
      options: {
        sourceMap: true,
      },
    },
    {
      loader: `postcss-loader`,
      options: {
        postcssOptions: {
          plugins: [
            autoprefixer(),
          ],
        },
        sourceMap: true,
      },
    },
  ],
};

const scriptRule = {
  test: /\.(js|jsx)$/i,
  exclude: /node_modules/,
  use: {
    loader: `babel-loader`,
  },
};

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `public`),
  },
  devServer: {
    contentBase: path.resolve(__dirname, `public`),
    watchContentBase: true,
    historyApiFallback: true,
    open: false,
    port: 1337,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  module: {
    rules: [styleRule, scriptRule],
  },
  resolve: {
    extensions: [`.js`, `.jsx`],
  },
  devtool: `source-map`,
};
