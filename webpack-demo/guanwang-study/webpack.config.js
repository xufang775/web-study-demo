const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin1 = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // mode:'development',
    mode:'production',
    entry:{
        app:'./src/index.js',
        another:'./src/another-module.js'
        // print:'./src/print.js'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    module:{
      rules:[
          {
              test:/\.css$/,
              use:[
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              test:/\.(png|svg|jpg|jpeg|gif)$/,
              use:['file-loader']
          },
          {
              test:/\.(woff|woff2|eot|ttf|otf)$/,
              use:['file-loader']
          },
          {
              test:/\.scss$/,
              use:[
                  {loader:'style-loader'},
                  {loader:'css-loader'},
                  {loader:'sass-loader'}
              ]
          },
          // {
          //     test:/\.(css|tsv)$/,
          //     use:['csv-loader']
          // },
          {
              test:/\.xml$/,
              use:['xml-loader']
          }
      ]
    },
    optimization: {
        splitChunks: {
            chunks: 'initial',
            automaticNameDelimiter: '.',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 1
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `manifest.${entrypoint.name}`
        }
    },
    plugins:[
        // new CleanWebpackPlugin1(),
        new HtmlWebpackPlugin({
            title:'output Management'
        }),
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'common'  // 指定公共bundle的名称
        // })
    ]
};
