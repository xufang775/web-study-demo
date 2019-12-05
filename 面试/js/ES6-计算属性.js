let a = {a: 10};
let b = {b: 10};
let c={};
let obj = {
    a: 10
};
obj[b] = 20;
obj[a] = 30;
obj[c] = 11;
console.log(obj)  // 输出 11
console.log(obj[a]);  // 输出 11
console.log(obj['[object Object]'])  // 输出 11