const {query}=require('./db');

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'123123',
//   database:'kkb'
// });
// connection.connect();
const sql='select * from user';
const promise = new Promise(resolve => {
    const res = query(sql);
    if(res){
        resolve(res);
    }
});
promise.then(res=>{
    console.log(res);
});
