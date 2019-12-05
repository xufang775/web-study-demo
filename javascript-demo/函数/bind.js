// 例子1
let person = {
    name:"许芳",
    age:28,
    sayHi:function () {
        return this.name;
    }
};
console.log(person.sayHi());

// 例子2
let sayHi = person.sayHi;
console.log(sayHi());


// 例子3
let sayHi1 = person.sayHi;
let bindSayHi = sayHi.bind(person);
console.log(bindSayHi());


function printArgs () {
    debugger;
    let aa = Array.prototype.slice.call(arguments);
    return Array.prototype.slice.call(arguments);
}
let bindFunc = printArgs.bind(this,1,2);

console.log(bindFunc(3,4));