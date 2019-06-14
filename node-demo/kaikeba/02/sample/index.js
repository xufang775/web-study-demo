const Koa = require('koa');
const app = new Koa()
app.use((ctx,next)=>{
    ctx.body = [
        {
            name:'tom'
        }
    ]
    next()
})

// const router = {}
// router['/html']=ctx=>{
//     ctx.type = 'text/html;charset = utf-8'
//     ctx.body = `
//         <b>名字：${ctx.body[0].name}</b>
//     `
// }


// app.use((ctx,next)=>{
//     // ctx.body.push(
//     //     {name:'jerry'}
//     // )

//     // if(ctx.url === '/html'){
//     //     ctx.type = 'text/html;charset = utf-8'
//     //     ctx.body = `
//     //         <b>名字：${ctx.body[0].name}</b>
//     //     `
//     // }

//     router[ctx.url](ctx)
// })

app.use(require('koa-static')(__dirname+'/'))

app.listen(3000)