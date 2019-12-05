// 宏任务1
new Promise((resolve) => {
    console.log('new Promise(macro task 1)');
    resolve();
}).then(() => {
    // 微任务1
    console.log('micro task 1');
    setTimeout(() => {
        // 宏任务3
        console.log('macro task 3');
    }, 2000)
})

setTimeout(() => {
    // 宏任务2
    console.log('macro task 2');
}, 1000)

console.log('========== Sync queue(macro task 1) ==========');

/*
执行顺序：主线程 => 主线程上创建的微任务 => 主线程上创建的宏任务 => 微任务上创建宏任务

预测输出：
new Promise(macro task 1)
========== Sync queue(macro task 1) ==========
micro task 1
macro task 2
macro task 3
 */
