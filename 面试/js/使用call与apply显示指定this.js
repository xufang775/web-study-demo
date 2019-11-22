// demo1------------------------------
// function fn() {
//     console.log(this.a);
// }
//
// var obj = {
//     a:20
// }
// fn.call(obj)


// demo2------------------------------

function fn(num1,num2) {
    console.log(this.a+num1+num2)
}
var obj={
    a:20
}
fn.call(obj,100,20);
fn.apply(obj,[20,10])

// demo3 将类数组对象转换为数组

function exam(a,b,c,d,e) {
    console.log(arguments)

    var arg = [].slice.call(arguments);
    
    console.log(arg)
}
exam(2,3,4,8,9)


// demo4 根据自己的需要灵活修改 this指向
var foo = {
    name:'joker',
    showName:function () {
        console.log(this.name)
    }
}
var bar = {
    name:'rose'
}
foo.showName.call(bar);

// 实现继承

