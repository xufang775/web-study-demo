// demo1--------------------------------

// var a= 20;
// function fn() {
//     console.log(this.a)
// }
// fn();

// demo2--------------------------------

// var a= 20;
// function fn() {
//     function foo() {
//         console.log(this.a)
//     }
//     foo();
// }
// fn();

// demo3--------------------------------
//
// var a= 20;
// var obj = {
//     a:10,
//     c:this.a+20,
//     fn:function () {
//         return this.a;
//     }
// }
// console.log(obj.c);   // 40
// console.log(obj.fn())   // 10


//
// 'use strict';
// var a = 20;
// function foo () {
//     var a = 1;
//     var obj = {
//         a: 10,
//         c: this.a + 20,
//         fn: function () {
//             return this.a;
//         }
//     }
//     return obj.c;
//
// }
// console.log(foo()); // 运行会报错


// 'use strict'
function foo() {
    console.log(this.a)
}

function active(fn) {
    fn(); // 真实调用者，为独立调用
}

var a = 20;
var obj = {
    a: 10,
    getA: foo
}

active(obj.getA);