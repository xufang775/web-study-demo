let Person = function (name) {
    this.name=name;
}

Person.prototype.remark = '我是法海';
Person.prototype.__proto__.id=11;
Person.prototype.__proto__.aaa="法海不懂爱";

let xiaoming = new Person('xiaoming');
xiaoming.sex=24;
xiaoming.remark = "B计划";

console.log(xiaoming.name);
console.log(xiaoming.sex);
console.log(xiaoming.remark);
console.log(xiaoming.id);
// Person ==> Object ==> null
// Person.prototype ==> Object.__proto__ ==> null
console.log(Person.prototype.__proto__.__proto__);

