const fs = require('fs');
const path = require('path');
// const data = fs.readFileSync('index.js');
// console.log(data.toString());

// // 异步读
// fs.readFile('index.js',(err,data)=>{
//     console.log(data.toString());
    
// });

fs.readFile(path.resolve(__dirname,'./index.js'),(err,data)=>{
    console.log(data.toString());
    
});
