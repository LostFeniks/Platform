const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // каталог для сборки
    filename: 'index.js', // совпадает с entry point в package.json
    library: 'ajs', // имя библиотеки
    libraryTarget: 'umd', // универсальный модуль (Node.js + браузер)
    libraryExport: 'default', // экспорт default
    globalObject: 'this', // корректная работа в Node.js
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};