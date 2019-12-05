const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/index.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Production'
        })
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
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
            // {
            //     test:/\.(css|tsv)$/,
            //     use:['csv-loader']
            // },
            {
                test:/\.xml$/,
                use:['xml-loader']
            }
        ]
    }
};


