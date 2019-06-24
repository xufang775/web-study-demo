const koa = require('koa')
const {initRouter} = require('./kkb-loader');

class kkb {
    constructor(conf){
        this.$app = new koa(conf)
        this.$router = initRouter();
        this.$app.use(this.$router.routes());
    }
    start(port){
        this.$app.listen(port,()=>{
            console.log('KKB Start 3000');
        })
    }
}
module.exports = kkb;