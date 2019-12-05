// 方法一，字符量创建
var o1 = { name:'01' };
//
var o2 = new Object({name:'o11'})
//方法二，使用显式的构造函数创建
var M = function () {
    this.name = 'o2'
}
var o3 = new M();
// 方法三，Object.create(xxx)方法创建 , xxx是原型对象
var P = {name:'o4'}
var o4 = Object.create(P);  // o4的对象为 Object {},是因为对象本身没有name属性的，而create()是将p赋值对原型对象上的。
console.log(o4.name)