const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    const {method,url} = req
    if(method === 'GET' && url === '/'){
        fs.readFile('./index.html',(err,data)=>{
            res.setHeader('Content-Type','text/html');
            res.end(data)
        })
    } else if(method === 'GET' && url ==='/api/users'){
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify([{name:'tom'}]))
    }
})
.listen(3000)