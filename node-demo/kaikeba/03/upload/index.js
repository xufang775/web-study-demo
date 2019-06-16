const http = require('http');
const fs = require('fs');
const path = require('path');
const chunk = [];
let size = 0;

const server = http.createServer((req,res)=>{
    const {pathname}=require('url').parse(req.url);
    if(pathname === '/upload'){
        console.log('upload...');
        const filename = req.headers['file-name']
        ? req.headers['file-name']
        :'abc.png';
        const outputFile = path.resolve(__dirname,filename);
        const fis = fs.createWriteStream(outputFile);;

        req.pipe(fis);
        res.end();
    }
}).listen(3000);