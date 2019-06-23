const Koa = require('koa');
const app =  new Koa();
const session = require('koa-session');

app.keys = ['some secret'];

const   SESS_CONFIG = {
    key:'kkb:sess',
    maxAge:8640000,
    httpOnly:true,
    
};