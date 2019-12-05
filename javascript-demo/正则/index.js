// var str = 'javascript is good';
// console.log(str.match(/java/gi));
//
// var str1 = 'Javascript is not java';
// var Reg = new RegExp('java','gi');
// console.log(str.match(Reg));
//
// var Reg2 = new RegExp('\\b\\w','gi');
// var newReg = new RegExp(/\b\w/gi);
//
// console.log(str.match(Reg2));
// console.log(str.match(newReg));
//

let str = "softwhy.com";
let reg = /[azc]/g;
console.log(str.match(reg));

let reg2 = /[fzc]/g;
console.log(str.match(reg2));

let one = /[ft]/g;
let two = /ft/g;

console.log(str.match(one));
console.log(str.match(two));

let reg3 = /[^ft]/g;
console.log(str.match(reg3));

let str2 = "w.wb";
let reg4 = /w\./g;
console.log(str2.match(reg4));

let str5 = 'w.wb';
let reg5 = /[.]/g;
console.log(str5.match(reg5));

let str6 = 'ab-c^0888';
let reg6 = /[\^0\-9]/g;
console.log(str6.match(reg6));