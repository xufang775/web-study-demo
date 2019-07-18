const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:'development',
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress:true,
        port:9000,
        before(apiRoutes){
            console.log('before');
            apiRoutes.get('/user',function(req,res){
                res.json([{name:'xufang2222'}]);
            })
        },
    },
    plugins:[
        new HtmlWebpackPlugin()
    ]
}