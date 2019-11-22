function logFenge(msg) {
    console.log(`----------------------${msg}------------------`)
}

// 变量提前
console.log(a)
console.log(typeof a)
console.log(typeof a === undefined)
console.log(typeof undefined)
console.log('--------------typeof null-------------')
console.log(null)
console.log(typeof null)

var a = 1

// 不存在的对象属性，是 undefined
let obj = { name:'xufang'};
console.log(obj)
console.log(obj.sex)    // 输出 undefined


// 不存在的数据元素，是 undefined
var arr = [1,2,3];
console.log(arr)
console.log(arr[1])
console.log(arr[4])
console.log(arr[100])


// 没有返回值的函数返回 undefined
function fn(aa) {
    console.log(1111)
    console.log('参数aa='+aa);   //  输出 参数aa=undefined
}
console.log(fn())   //  undefined


// null和undefined转换成number数据类型
logFenge('null和undefined转换成number数据类型')
console.log(parseInt(null));
console.log(parseInt(undefined))

