const path = require('path')
const {merge} = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = () => {
  const cssLoaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        sourceMap: true,
      },
    },
  ]

  const plugins = [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$', // embed all javascript and css inline
    }),
  ]

  // packages that we don't expect to update often
  const VENDOR_LIBS = [
    '@faker-js/faker',
    'lodash',
    'react-redux',
    'react-dom',
    'react-input-range',
    'redux-form',
    'redux-thunk',
  ]

  return merge([
    {
      entry: {
        // bundle.js file
        bundle: './src/index.js',
        vendor: VENDOR_LIBS,
      },
      output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
      },
      mode: 'development',
      module: {
        rules: [
          {
            use: {
              loader: 'babel-loader',
            },
            test: /\.(js|jsx)$/,
            exclude: [path.resolve(__dirname, './node_modules')],
          },
          {
            use: cssLoaders,
            test: /\.(css)$/i,
          },
          {
            test: /\.(scss)$/i,
            use: [
              ...cssLoaders,
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    includePaths: ['./src/style'],
                  },
                },
              },
            ],
          },
        ],
      },
      plugins,
    },
    {
      optimization: {
        minimize: false,
        minimizer: [new TerserPlugin()],
      },
    },
  ])
}
