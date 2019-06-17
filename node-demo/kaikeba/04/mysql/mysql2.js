setTimeout(async ()=>{
    const mysql = require('mysql2/promise');
    const cfg = {
        host:'localhost',
        user:'root',
        password:'123123',
        database:'kaikeba'
    }
    const create_sql = ``;


    const connection = await mysql.createConnection(cfg);

    let ret = await connection.excu



});

