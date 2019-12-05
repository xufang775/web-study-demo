// let validator = {
//     set:function (obj,prop,value) {
//         if (prop === 'age') {
//             if (!Number.isInteger(value)) {
//                 throw new TypeError('The age is not an integer');
//             }
//             if (value > 200) {
//                 throw new RangeError('The age seems invalid');
//             }
//         }
//         obj[prop] = value;
//     }
// };
//
// let person = new Proxy({
//     name:'xufang'
// },validator);
//
// person.age = 100;
// person.age = 'yong';
//
// console.log(person.age);
// console.log(person.name);

//==============================================

// const handler = {
//     get(target,key){
//
//     }
// };
// function inveriant(key,action) {
//     if (key[0] === '_') {
//         throw new Error(`Invalid attempt to ${action} private "${key}" property`);
//     }
// }
// const target = {};
// const proxy = new Proxy(target,handler);

//===============================================

//
// var target = function () { return 'I am the target'; };
// var handler = {
//     apply: function () {
//         return 'I am the proxy';
//     }
// };
//
// var p = new Proxy(target, handler);
//
// p()
// console.log(p());

//=============================================
//
// var twice = {
//     apply(target,ctx,args){
//         return Reflect.apply(...arguments) * 2;
//     }
// };
// function sum(left,right) {
//     return left + right;
// }
// var proxy = new Proxy(sum,twice);
// console.log( proxy(1,2));
// console.log(proxy.call(null, 5, 6));
// console.log(proxy.apply(null, [7, 8]));


// ====================================================

// var handler = {
//     has(target,key){
//         if (key[0] === '_') {
//             return false;
//         }
//         return key in target;
//     }
// };
// var target = { _prop:'foo',prop:'foo'};
// var proxy = new Proxy(target,handler);
// console.log('_prop' in proxy);


// ====================================================
//
// var obj = {a:10};
// Object.preventExtensions(obj);
//
// var p = new Proxy(obj,{
//     has:function (target,prop) {
//         return false;
//     }
// })

//
// // ====================================================
//
// let stu1 = {name:'张三',score:59};
// let stu2 = {name:'李四',score:99};
//
// let handler = {
//     has(target,prop){
//         if(prop === 'score' && target[prop]<60){
//             console.log(`${target.name}不及格`);
//             return false;
//         }
//         return prop in target;
//     }
// }
// let oproxy1 = new Proxy(stu1,handler);
// let oproxy2 = new Proxy(stu2,handler);
//
// console.log('score' in oproxy1);
// console.log('score' in oproxy2);
//
// for(let a in oproxy1){
//     console.log(oproxy1[a]);
// }
//
// for(let b in oproxy2){
//     console.log(oproxy2[b]);
// }

// =====================================================

// var p = new Proxy(function () {},{
//     construct: function (target,args) {
//         console.log(`called: ${args.json(',')}`);
//         return { value: args[0] * 10 };
//     }
// });
// console.log((new p(1)).value);

// =====================================================













