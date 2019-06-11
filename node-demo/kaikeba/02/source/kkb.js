const http = require('http')
class KKB {
    listen(...args){
        const server = http.createServer((req,res)=>{
            this.callback(req,res)
        })
        server.listen(...args)
    }
    user(callback){
        this.callback = callback
    }
}
module.exports = KKB