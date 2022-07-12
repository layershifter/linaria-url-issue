const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.js$/,
        use: [{ loader: '@linaria/webpack-loader' }],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name][contenthash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
  ],
  optimization: {
    // Modified config to keep code readable, just comment to get default behavior
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            unsafe: true,
          },
          mangle: false,
          output: {
            beautify: true,
            comments: true,
            preserve_annotations: true,
          },
        },
      }),
    ],
  },
};
