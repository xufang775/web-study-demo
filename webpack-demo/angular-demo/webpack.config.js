const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ENV = 'production';

module.exports = {
    mode:ENV,
    devtool:'source-map',
    entry:{
        polyfills:path.resolve(__dirname,'./src/polyfills.ts'),
        main:path.resolve(__dirname,'./src/main.ts')
    },
    output:{
        path:path.resolve(__dirname,'wwwroot'),
        filename:'[name].[chunkhash].bundle.js',
        sourceMapFilename:'[file].map',
        chunkFilename:'[name].[chunkhash].chunk.js'
    },
    resolve:{
        extensions:['.ts','.js','.json']
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['to-string-loader','css-loader'],
                exclude:[path.resolve(__dirname,'./src/style')]
            },
            {
                test:/\.scss$/,
                use:['to-string-loader','css-loader','scss-loader'],
                exclude:[path.resolve(__dirname,'./src/styles')]
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader'],
                include:[path.resolve(__dirname,'./src/styles')]
            },
            {
                test:/\.scss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader'],
                include:[path.resolve(__dirname,'./src/styles')]
            },
            {
                test:/\.html$/,
                use:['raw-loader'],
                exclude:[path.resolve(__dirname,'./src/index.html')]
            },
            {
                test:/\.(jpg|png|gif|pdf|eot|woff2?|svg|ttf)$/,
                use:'file-loader'
            },
            {
                test:/(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                use:[{
                    loader:'@angular-devkit/build-optimizer/webpack-loader',
                    options:{
                        sourceMap:false
                    }
                },'@ngtools/webpack']
            },
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'@angular-devkit/build-optimizer/webpack-loader',
                        options:{
                            sourceMap:false
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            inject:'body',
            xhtml:true,
            minify:true
        }),
        new DefinePlugin({
            'isDevServer':'false',
            'ENV': JSON.stringify(ENV)
        }),
        new AngularCompilerPlugin({
            tsConfigPath:'./tsconfig.json',
            entryModule:'./src/app/app.module#AppModule'
        }),
        new MiniCssExtractPlugin({
            filename:'[name]-[hash].css',
            chunkFilename:'[name]-[chunkhash].css'
        })
    ],
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                sourceMap:false,
                parallel:true,
                cache:path.resolve(__dirname,'webpack-cache/uglify-cache'),
                uglifyOptions:{
                    compress:{
                        pure_getter:true,
                        passes:2
                    },
                    output:{
                        ascii_only:true,
                        comments:false
                    }
                }
            })
        ],
        splitChunks:{
            chunks:'all'
        }
    },
    devServer:{
        port:4500,
        host:'127.0.0.1',
        historyApiFallback:true,
        watchOptions:{
            ignore:/node_modules/
        }
    },
    node:{
        global:true,
        crypto:'empty',
        process:false,
        module:false,
        clearImmediate:false,
        setImmediate:false,
        fs:'empty'
    }
}