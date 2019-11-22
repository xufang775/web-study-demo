Function.prototype.myCall = function (context) {
    var context = context || window;
    // 给context 添加一个属性
    // getValue.call(a,'yck','24') => a.fn = getValue
    context.fn = this;
    // console.log(arguments)
    // console.log([...arguments])
    // 将context后面的参数取出来, 作为调用函数的实参
    // arguments 是一个类数组对象 {'0':'yck','1':'24'}
    // 将其转换成数组
    var args = [...arguments].slice(1);
    // getValue.call(a,'yck','24') => a.fn('yck','24')
    var result = context.fn(args);  // 执行函数
    // 删除fn
    delete context.fn;
    return result;
}

function getValue(name,age) {
    console.log(`你好，我是${name},今年${age}岁`);
}
function sayHello() {
    console.log(`你好，我是${this.name}`);
}

var obj = { name:'xufang',age:18}

// sayHello(obj)
getValue.myCall(obj,'xiaoming',24)