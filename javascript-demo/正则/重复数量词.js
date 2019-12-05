// let str = '123erw';
// let reg = /\w\w/;
// console.log(str.match(reg));
//
// let reg2 = /\w{5}/;
// let str2 = 'abckefgh';
// console.log(str2.match(reg2));
//
// let str3 = 'antantsoftwhy.com';
// let reg3 = /(ant){2}/;
// console.log(str3.match(reg3));
//
// let one = '123';
// let two = '123456';
// let reg4 = /\d{4,7}/;
// console.log(one.match(reg4));
// console.log(two.match(reg4));
//
// let str5 = "ant5love";
// let reg5 = /ant\d/g;
// console.log(str5.match(reg5));
//
// let str6 = "2018-10-20";
// let reg6 = /(\d{4})-(\d{2}-(\d\d))/;
// console.log(str6.match(reg6));
//
// var str7 = 'antzone';
// let reg7 = 'a|b';
// console.log(str7.match(reg7));
//
// let str8 = 'ant,zone,aaa';
// let newStr = str8.replace(/(\w+),(\w+),(\w+)/,'$3, $2 ,$1');
// console.log(newStr);
//
//
//
// let str9='ant,zone';
// let reg9 = /(\w+),(\d+)/;
// console.log(reg9.test(str9));
//
// let newStr2 = RegExp.$2 + ',' + RegExp.$1;
// console.log(newStr2);
//
//
// // ===================正则  非引用型分组 ==========================
// let reg10 = /(java(script))/;
// let str10 = 'javascript11';
// console.log(str10.replace(reg10,'$2'));
//
// let reg11 = /(java(?:script))/;
// let str11 = 'javascript';
// console.log(str11.replace(reg11,'$2'));


// ========修改符========

// let str = 'antzone';
// let reg = /ANT/gi;
// console.log(str.match(reg));


// ==================元字符=============
var str = '11antant';
let reg = /^ant/g;
let reg2 = /./g;
let reg3 = /t$/g;

console.log(str.match(reg));
console.log(str.match(reg2));
console.log(str.match(reg3));
