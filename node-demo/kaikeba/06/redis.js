const redis = require('redis');
const client = redis.createClient();

client.set('hello','this is a valule');

client.get('hello',(err,data)=>{
    console.log('redis get:',data);
});