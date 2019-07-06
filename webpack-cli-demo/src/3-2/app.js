// es module
import sum from './sum';
// commmon.js
var minus = require('./mimus');
// amd
require(['./muti'],function (muti) {
    console.log('muti(2,3)=',muti(2,3))
});

console.log('sum(23,24)',sum(23,24));
console.log('sum(24,17)',minus(24,17));