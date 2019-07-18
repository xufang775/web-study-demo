const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig =  require('./webpack.config');
const compiler = Webpack(webpackConfig);

const users = require('./src/data/user');


const devServerOptions = Object.assign({},webpackConfig.devServer,{
    port:4500,
    // contentBase:false,
    hot:true,    // 热更新
    open:true,
    openPage:'index.html',
    headers: {
        "X-Custom-Foo": "bar"
    },
    before(apiRoutes){
        console.log('before');
        // apiRoutes.get('/user',function(req,res){
        //     res.json([{name:'xufang-before'}]);
        // })
    },
    after(apiRoutes){
        console.log('after');
        apiRoutes.get('/user',function(req,res){
            res.json([{name:'xufang-after'}]);
        })
        apiRoutes.get('/users',function(req,res){
            res.json(require('./src/data/user.js'));
        });
    },
    proxy:{
        // "/api":"http://localhost:9000",
        "/api1":{
            target:"http://localhost:9000",
            pathRewrite:{"^/api1":""}
        }
    },
    watchContentBase:true,
});
const server = new WebpackDevServer(compiler,devServerOptions);

server.listen(devServerOptions.port,null,()=>{
    console.log('Starting server on http://localhost:'+devServerOptions.port);
});

// server.listen(8080,'127.0.0.1',()=>{
//     console.log('Starting server on http://localhost:8080');
    
// });