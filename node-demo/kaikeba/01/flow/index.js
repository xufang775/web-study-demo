const log = name=>{
    console.log(`Log......${name} ${new Date().getTime()}`);
}
const delay = 1000;


const promise = name => new Promise(resolve=>{
    setTimeout(()=>{
        resolve();
        log(name);
    },delay)
})
// promise('Promise')
// .then(()=>promise('P2'))
// .then(()=>{
//     promise('P3');
// })

// Generator 和 yeild 和 iterator ES6
const generator = function* (name){
    yield promise(name);
    yield promise(name);
}
// const gen = generator('Generator');
// gen.next().value.then(()=>{
//     gen.next();
// })

// 另一种方法，自己实现一个co库
// let co = function(gen,name){
//     var it = gen(name);
//     var ret = it.next();
//     ret.value.then(function(res){
//         it.next(res);
//     })
// }
// co(generator,'CO');


// 又一方法， Async和Await组合

setTimeout(async()=>{
    await promise('Async/await');
    await promise('Async/await');
})


