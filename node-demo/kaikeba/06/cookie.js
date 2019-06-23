const http = require('http');
const session = {};
http.createServer((req,res)=>{
    if(req.url === '/favicon.ico'){
        res.end('');
        return;
    }
    // 观察cookie
    console.log('cookie:,',req.headers.cookie);

    const sessionKey = 'sid';
    const cookie = req.headers.cookie;
    if(cookie && cookie.indexOf(sessionKey) > -1){
        res.end('Come Back');
        // 简略写法未必具有通用性
        const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
        const sid = pattern.exec(cookie)[1]
        console.log('session:', sid, session, session[sid])


    } else {
        // 设置
        const sid = (Math.random() * 999999999).toFixed();
        res.setHeader('set-Cookie',`${sessionKey} = ${sid}`);
        session[sid] = {name:'laowang'};
        res.end('Hello');;
    }



    // 设置cookie
    // res.setHeader('Set-Cookie','cookie1=abc');
    // res.end('hello cookie');
}).listen(3000);