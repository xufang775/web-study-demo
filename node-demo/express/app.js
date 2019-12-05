var express = require('express');
var app = express();
var admin = express();

app.get('/',function (req,res) {
    console.log(admin.mountpath);
    res.send('你好');
});

app.listen(3000,function () {
    console.log('server start http://localhost:3000');
});