// ここから変更不要
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
          loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer'
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          },
        ]
      },
      {
         // ここで画像を読み込む
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
            {
                loader: "file-loader",
                options: {
                name: '[path][name].[ext]',
                publicPath: "/assets/images",
                }
            }
         ]
      },
    ]
  },
  // ここまで変更不要

  // ページを追加する時はここに記述する必要有り
  // new HtmlWebpackPlugin のあたりの行をコピペしてもらえると
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
      ignoreOrder: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'index.html'), // パスの指定
      filename: 'index.html'  // dist/html/以下にindex.htmlをビルド
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'Links', 'index.html'),
      filename: 'Links/index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'News', 'index.html'),
      filename: 'News/index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'News', 'detail.html'),
      filename: 'News/detail.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'Profile', 'index.html'),
      filename: 'Profile/index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'Top', 'index.html'),
      filename: 'Top/index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'Works', 'index.html'),
      filename: 'Works/index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'Works', 'detail.html'),
      filename: 'Works/detail.html',
    }),
  ]
};
