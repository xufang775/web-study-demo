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
        filename:'[name].bundle.js',
        chunkFilename:'[name].chunk.js',
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 name: "commons",
    //                 chunks: "initial",
    //                 minChunks: 2
    //             }
    //         }
    //     }
    // },
    optimization: {
        splitChunks: {
            cacheGroups: {
                // 注意: priority属性
                // 其次: 打包业务中公共代码
                common: {
                    name: "common",
                    chunks: "all",
                    minSize: 1,
                    priority: 0
                },
                // 首先: 打包node_modules中的文件
                // vendor: {
                //     name: "vendor",
                //     test: /[\\/]node_modules[\\/]/,
                //     chunks: "all",
                //     priority: 10,
                //     minChunks: Infinity,
                // }
                vendors: {
                    test: /node_modules/,
                    name: 'vendor',
                    minSize: 0,
                    minChunks: 1,
                    chunks: 'initial',
                    priority: 1 // 该配置项是设置处理的优先级，数值越大越优先处理
                },
                // vendor: {
                //     // test: /\.js$/,
                //     test: /[\\/]node_modules[\\/]/,
                //     chunks: "initial", //表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
                //     name: "vendor", //拆分出来块的名字(Chunk Names)，默认由块名和hash值自动生成；
                //     enforce: true,
                // }

            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    },
    // plugins:[
    //     new webpack.optimize.RuntimeChunkPlugin({
    //         name: "common"
    //     }),
    // ]
};