// 最基本的静态服务器
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    // console.log('res',getPrototypeChain(res));
    // res.end('Hello World');

    const {url,method,headers} = req;
    if(url === '/' && method ==='GET'){
        fs.readFile('index.html',(err,data)=>{
            res.statesCode = 200;
            res.setHeader('Content-Type','text/html');
            res.end(data);
        })
    } else if(url === '/users' && method ==='GET'){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify([{name:'Tom'}]));
    } else if(method === 'GET' && headers.accept.indexOf('image/*') !==-1){
        console.log(url);
        
        fs.createReadStream('.'+url).pipe(res)
    }
    

});
server.listen(3000)

// res是个流
function getPrototypeChain(obj){

    const protoChain = [];
    while(obj = Object.getPrototypeOf(obj)){
        protoChain.push(obj);
    }
    protoChain.push(null);
    return protoChain;
}