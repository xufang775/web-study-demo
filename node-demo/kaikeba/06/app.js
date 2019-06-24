const Koa = require('koa');
const app =  new Koa();
const session = require('koa-session');
const redisStore = require('koa-redis');
const redis = require('redis');
const redisClient = redis.createClient(6379,'localhost');

const wrapper = require('co-redis');
const client = wrapper(redisClient);



app.keys = ['some secret'];

const   SESS_CONFIG = {
    key:'kkb:sess',
    maxAge:8640000,
    httpOnly:true,
    signed:false,
    store:redisStore({client})
};

app.use(session(SESS_CONFIG,app));

app.use(async (ctx,next)=>{
    const keys = await client.keys('*');
});