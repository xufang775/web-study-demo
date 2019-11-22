// 原始例子
function test() {
    console.log(foo)
    console.log(bar)

    var foo = 'hello'
    console.log(foo)
    var bar= function () {
        return 'world'
    }
    
    function foo() {
        return 'hello';
    }
}
test();

// 执行阶段时的例子

function test2() {
    function foo() {
        return 'hello'
    }
    var foo;
    var bar;

    console.log(foo);    // [Function：foo]
    console.log(bar);    // undefined

    foo='hello';
    console.log(foo);    // 'hello'

    bar = function () {
        return 'world';
    }
}
test2();