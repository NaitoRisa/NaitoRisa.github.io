// ここから変更不要
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
  context: __dirname + '/src/',
  entry: {
    main: './main.js',
    // TODO: これ以上増えるなら、動的に読み込むようにしても良いかも
    index: './scss/pages/index.scss',
    links: './scss/pages/links.scss',
    news: './scss/pages/news.scss',
    newsDetail: './scss/pages/newsDetail.scss',
    profile: './scss/pages/profile.scss',
    works: './scss/pages/works.scss',
    worksDetail: './scss/pages/worksDetail.scss',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
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
    ]
  },
  // ここまで変更不要

  // ページを追加する時はここに記述する必要有り
  // new HtmlWebpackPlugin のあたりの行をコピペしてもらえると
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      ignoreOrder: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'index.html'), // パスの指定
      filename: 'index.html',  // dist/html/以下にindex.htmlをビルド
      chunks: [
        'main',
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'Links', 'index.html'),
      filename: 'Links/index.html',
      chunks: [
        'main',
        'links',
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'News', 'index.html'),
      filename: 'News/index.html',
      chunks: [
        'main',
        'news',
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'News', 'indexDetail.html'),
      filename: 'News/indexDetail.html',
      chunks: [
        'main',
        'newsDetail',
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'Profile', 'index.html'),
      filename: 'Profile/index.html',
      chunks: [
        'main',
        'profile',
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'Top', 'index.html'),
      filename: 'Top/index.html',
      chunks: [
        'main',
        'top',
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'Works', 'index.html'),
      filename: 'Works/index.html',
      chunks: [
        'main',
        'works',
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'html', 'Works', 'indexDetail.html'),
      filename: 'Works/indexDetail.html',
      chunks: [
        'main',
        'worksDetail',
      ],
    }),
  ]
};
