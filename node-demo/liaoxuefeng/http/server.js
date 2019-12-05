var http = require('http');
http.createServer(function (request,response) {
    response.writeHead(200,{
        'Access-Control-Allow-Origin':'*',
        // 'Content-Type':'text/plain'
    });
    // 发送响应数据 “hello world”
    response.end('Hello World');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888');