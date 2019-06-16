// 所有在node中要修改文件时，需要用过buffer
const buf1 = Buffer.alloc(10)
console.log(buf1);

const buf2 = Buffer.from('a');
console.log(buf2);  // 61

const buf3 = Buffer.from('中国')
console.log(buf3)

const buf4 = Buffer.concat([buf2,buf3]);
console.log(buf4.toString());
