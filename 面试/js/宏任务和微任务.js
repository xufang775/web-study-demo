// 执行顺序： 主线程 => 主线程上创建的微任务 => 主线程上创建的宏任务
console.log('--------------------- start -----------------')

setTimeout(()=>{
    console.log('setTimeout');
},0);

new Promise((resolve,reject)=>{
    for(var i=0;i<5;i++){
        console.log(i)
    }
    resolve();
}).then(()=>{
    console.log('promise实例成功回调执行')
});

console.log('--------------------- end -----------------')


setTimeout(_=>console.log(4))
new Promise(resolve=>{
    resolve();
    console.log(1);
}).then(_=>{
    console.log(3)
})
console.log(2);