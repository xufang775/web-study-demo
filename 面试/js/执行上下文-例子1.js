var color = 'blue';

function changeColor() {
    var anotherColor = 'red';

    function swapColors() {
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor
    }
    swapColors();
}
console.log('更换前：'+color)
changeColor();
console.log('更换后：'+color)


// 一个闭包
function f1() {
    var n=999;
    function f2() {
        // alert(n)
        console.log(n)
    }
    return f2
}
var result = f1();
result();


function test() {
    console.log(a);
    console.log(foo)
    foo();
    
    var a=1;
    function foo() {
        console.log(222);
        return 2;
    }
}
test();