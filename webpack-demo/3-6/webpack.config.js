var webpack = require('webpack');
var path = require('path');
module.exports = {
    mode:'development',
    entry:{
        'pageA':'./src/pageA',
        'pageB':'./src/pageB',
        'vendor': ['lodash']
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'./dist/',
        filename:'[name].bundle.js',
        chunkFilename:'[name].chunk.js',
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             // 注意: priority属性
    //             // 其次: 打包业务中公共代码
    //             common: {
    //                 name: "common",
    //                 chunks: "all",
    //                 minSize: 1,
    //                 priority: 0
    //             },
    //             vendors: {
    //                 test: /node_modules/,
    //                 name: 'vendor',
    //                 minSize: 0,
    //                 minChunks: 1,
    //                 chunks: 'initial',
    //                 priority: 1 // 该配置项是设置处理的优先级，数值越大越优先处理
    //             },
    //         }
    //     },
    //     runtimeChunk: {
    //         name: 'manifest'
    //     }
    // },
    plugins:[

        // new webpack.optimize.SplitChunksPlugin({
        //     cacheGroups: {
        //         default: {
        //             minChunks: 2,
        //             priority: -20,
        //             reuseExistingChunk: true,
        //         },
        //         //打包重复出现的代码
        //         vendor: {
        //             chunks: 'initial',
        //             minChunks: 2,
        //             maxInitialRequests: 5, // The default limit is too small to showcase the effect
        //             minSize: 0, // This is example is too small to create commons chunks
        //             name: 'vendor'
        //         },
        //         //打包第三方类库
        //         commons: {
        //             name: "commons",
        //             chunks: "initial",
        //             minChunks: Infinity
        //         }
        //     }
        // }),
        //

        new webpack.optimize.SplitChunksPlugin({
            async:'async-common',
            children:true,
            minChunks:2
        }),
        // new webpack.optimize.SplitChunksPlugin({
        //     name:'vendor',
        //     minChunks:Infinity
        // }),
        new webpack.optimize.RuntimeChunkPlugin({
            name: "manifest"
        }),
    ]
};