// -、*、/、%：一律转换成数值后计算
console.log('32'<30)
console.log('32'>'11')
console.log(23>'生物')

// 数字 + 字符串 = 字符串，运算顺序是从左到右
console.log('234'+111)

// 数字 + 对象
let obj = {name:'xufang'};
console.log(obj.toString())
console.log(obj.valueOf())
console.log(11 + {name:'xufang'});

// 数字 + boolean / null -> 数字
console.log(11+true)    // 11 + 1
console.log(11+false)   // 11 + 0
console.log(11+null)   // 11 + 0

//  数字 + undefined -> NaN
console.log(12 + undefined)

//
console.log([1].toString() === '1')
console.log([2,3].toString())   // 2,3

// {}.toString() === '[object object]'
console.log({}.toString())
console.log({}.toString() === '[object Object]')

// NaN !== NaN、+ undefined 为 NaN
console.log(NaN !== NaN)


//========================================类型判断=======
console.log('----------------------------------------')

let aa = null;
console.log(aa === null)
console.log(String(null) === 'null')


let today = new Date();
let arr = [];
let obj1 = {};
let regexp = /^d$/;
console.log(toString(today))
console.log(arr.toString())
console.log(obj1.toString())



let class2type = {}
'Array Date RegExp Object Error'.split(' ').forEach(e => class2type[ '[object ' + e + ']' ] = e.toLowerCase())
console.log(class2type)
function type(obj) {
    if (obj == null) return String(obj)
    return typeof obj === 'object' ? class2type[ Object.prototype.toString.call(obj) ] || 'object' : typeof obj
}
console.log(type(today))
console.log(type(arr))
console.log(type(obj1))
console.log(type(regexp))