const path = require('path')
const {merge} = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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

  const imageLoaders = [
    {
      loader: 'url-loader',
      options: {limit: 40000},
    },
    'image-webpack-loader',
  ]

  return merge([
    {
      // relative path
      entry: './src/index.js',
      output: {
        // absolute path
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/',
      },
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            include: [path.resolve(__dirname, './src')],
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.(css)$/i,
            use: cssLoaders,
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: imageLoaders,
          },
        ],
      },
      plugins,
    },
  ])
}
