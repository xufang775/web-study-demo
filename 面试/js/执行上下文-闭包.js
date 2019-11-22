// var fn = null;
// function foo() {
//     var a = 2;
//     function innnerFoo() {
//         debugger;
//         console.log(a);
//     }
//     fn = innnerFoo; // 将 innnerFoo的引用，赋值给全局变量中的fn
// }
//
// function bar() {
//     fn(); // 此处的保留的innerFoo的引用
// }
//
// foo();
// bar(); // 2


//
// var fn = null;
// function foo() {
//     var a = 2;
//     function innnerFoo() {
//         console.log(c); // 在这里，试图访问函数bar中的c变量，会抛出错误
//         console.log(a);
//     }
//     fn = innnerFoo; // 将 innnerFoo的引用，赋值给全局变量中的fn
// }
//
// function bar() {
//     var c = 100;
//     fn(); // 此处的保留的innerFoo的引用
// }
//
// foo();
// bar();


