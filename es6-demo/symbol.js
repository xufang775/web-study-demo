let s = Symbol();
console.log(typeof s);

let s1 = Symbol('foo');
let s2 = Symbol('bar');

console.log(s1);
console.log(s2);

console.log(s1.toString());
console.log(s2.toString());

const obj = {
    toString(){
        return 'abc';
    }
};
const sym = Symbol(obj);

let arr = ['a','b','c'];
let iter = arr[Symbol.iterator]();




