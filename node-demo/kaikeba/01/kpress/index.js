const express = require('./kpress')
const app = express();
app.get('/',(req,res)=>{
    abc();
    res.end('Hello World');
})
app.get('/users',(req,res)=>{
    res.end(JSON.stringify([{name:'Tom111',age:20}]))
})
// process.on('uncaughtException',err=>{
//     console.log('EEE',err);
// })
app.listen(3000,()=>{
    console.log('Example app listen at 3000');
    
})