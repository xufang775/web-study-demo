// 普通的请求方式，会出现跨域
// const express = require('express');
// const app = express();
// app.use(express.static(__dirname+'/'));
// module.exports = app;


// 反射代理
var express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
// 静态服务
app.use(express.static(__dirname+'/'));
// 接口反向代理
app.use('/api',proxy({target:'http://localhost:4000',changeOrigin:false}));
module.exports = app;