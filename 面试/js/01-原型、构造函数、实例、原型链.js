// 方法一，字符量创建
var o1 = { name:'01' };
//
var o2 = new Object({name:'o11'})
//方法二，使用显式的构造函数创建
var M = function () {
    this.name = 'o3'
}
var o3 = new M();
console.log(M.prototype.constructor === M);  // true
console.log(o3.__proto__ === M.prototype)   // true

var o5 = new M.prototype.constructor();
console.log(o5)

/*
o3 是实例
M  是构造函数

 */


//方法三，Object.create()方法创建
var P = {name:'o3'}
var o4 = Object.create(P);