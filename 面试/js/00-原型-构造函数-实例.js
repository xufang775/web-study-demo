//实例
const instance = new Object()
instance.prototype = { name:'xufang',age:12 }
// 原型
const prototype = Object.prototype;

console.log(instance)
console.log(prototype)
console.log(instance.constructor)