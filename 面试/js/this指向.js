// this的指向，是在函数被调用时确定的。



/*
// demo 1
var a = 10;
var obj={
    a:20
}

function fn() {
    console.log(this.a);
}
fn();    // 在浏览器环境中， 输出 10， this指向 window
fn.call(obj);
*/

// demo2
// 在函数执行过程中，this一旦被确定，就不可更改了。
/*
var a = 10;
var obj = {
    a:20
}
function fn() {
    this = obj;     // 报错
    console.log(this.a)
}
fn();
*/

