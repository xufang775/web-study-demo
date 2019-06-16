(new Promise(resolve=>{
    console.log('resolve');
    resolve();
}))
.then(()=>console.log('promise then'))

setImmediate(()=>{
    console.log('set Immediate');
},0)


// setTimeout,放入Event Table中，1秒后将回调函数放入宏任务的 Event Queue中
setTimeout(()=>{
    console.log('setTimeout ...');
})


process.nextTick(()=>{
    console.log('nextTick...');
});