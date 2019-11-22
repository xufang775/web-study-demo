// let arr = [1,2,3];
// console.log(arr.slice(1))

/*
bind方法
1. fn.bind(this指定对象)
 */


Function.prototype.myBind = function (context) {
    if(typeof this !== 'function'){  // 调用 myBind的对象必须是 function
        throw new TypeError('Error')
    }
    var _this = this;
    var args = [...arguments].slice(1);  // 返回从索引1开始到结束的数组
    // 返回一个函数
    return function F() {
        // 因为返回了一个函数，我们可以 new F()，所以需要判断
        if (this instanceof F) {  // 表示是 new F()实例化
            return _this(...args,...arguments);
        }
        return _this.apply(context,args.concat(...arguments));
    }
}

function test() {
    debugger;
    console.log(this.a)
}
var obj = {
    a:'xufang'
};
var aa='123';

test.myBind(obj)();

// new test.myBind(obj)();

// obj.test();