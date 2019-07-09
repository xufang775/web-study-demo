var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode:'development',
  entry:{
      app:'./src/app.js'
  },
    output:{
        path:path.resolve(__dirname,'dist'),
        publicPath:'./dist/',
        filename:'[name].bundle.js',
        chunkFilename:'[name].bundle.js'
    },
    module:{
      rules:[
          {
              test:/\.css$/,
              use:[
                  {
                      // loader:'style-loader'
                      // loader:'style-loader/url',
                      loader:'style-loader',
                      options:{
                          // insertInto:'#app',
                          singleton:true,
                          transform:'./css.transform.js'
                      }
                  },
                  {
                      // loader:'file-loader',
                      loader:'css-loader',
                      options:{
                          // minimize:true,
                          modules:true,
                          // localIdentName: '[name]---[local]---[hash:base64:5]'
                          // localIdentName:'[path][name]__[local]--[hash:base64:5]'
                      }
                  }
              ]
          },
          {
              test:/\.less$/,
              // use:[
              //     MiniCssExtractPlugin.loader,
              //     'css-loader',
              //     {
              //         loader:'less-loader',
              //         options:{
              //             modules:true
              //         }
              //     }
              //
              // ],
              use:[
                  {
                      // loader:'style-loader'
                      // loader:'style-loader/url',
                      loader:'style-loader',
                      options:{
                          // insertInto:'#app',
                          singleton:true,
                          transform:'./css.transform.js'
                      }
                  },
                  {
                      loader:'css-loader',
                      options:{
                          modules:true,
                      }
                  },
                  {
                      loader:'less-loader',
                      // localIdentName: '[local]___[hash:base64:5]'   // 报错没有此错
                  }
              ],

              // use:ExtractTextWebpackPlugin.extract({
              //     fallback: {
              //         // loader:'style-loader'
              //         // loader:'style-loader/url',
              //         loader:'style-loader',
              //         options:{
              //             // insertInto:'#app',
              //             singleton:true,
              //             transform:'./css.transform.js'
              //         }
              //     },
              //     use:[
              //         {
              //             loader:'css-loader',
              //             options:{
              //                 modules:true,
              //             }
              //         },
              //         {
              //             loader:'less-loader',
              //             // localIdentName: '[local]___[hash:base64:5]'   // 报错没有此错
              //         }
              //     ]
              // })
          }
      ],
    },
    plugins:[
        // new ExtractTextWebpackPlugin({
        //     filename:'[name].min.css'
        // }),
        // new MiniCssExtractPlugin({
        //     filename:'[name].css',
        //     chunkFilename:'[id].css'
        // })
    ]
};