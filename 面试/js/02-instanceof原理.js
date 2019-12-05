let Person = function (name) {
    this.name = name
}
let xiao = new Person('xiao');
// 能在实例的 原型对象链 中找到该构造函数的 prototype 属性所指向的原型对象，
// 则返回 true 
console.log(xiao instanceof Person)   // true
console.log(xiao instanceof Object)   //  true