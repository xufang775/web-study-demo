// var obj = new Proxy({},{
//     get : function (target,key,receiver) {
//         console.log(`getting ${key}!`);
//         return Reflect.set(target,key,receiver)
//     },
//     set: function (target,key,value,receiver) {
//         console.log(`setting ${key}!`);
//         return Reflect.set(target,key,value,receiver)
//     }
// });
// obj.count = 1;
// ++ obj.count;
//
// console.log(obj.count);


//
// var object = {proxy:new Proxy(target,handler)};
// var proxy = new Proxy({},{
//     get:function (target,property) {
//         return 35;
//     }
// });
// let obj = Object.create(proxy);
// console.log(obj.time);
//



// var handler = {
//     get : function (target,name) {
//         if ( name === 'prototype' ){
//             return Object.prototype;
//         }
//         return 'hello , '+ name;
//     },
//     apply:function (target,thisBinding,args) {
//         return args[0];
//     },
//     construct:function (target,args) {
//         return {value:args[1]};
//     }
// };
//
// var fproxy = new Proxy(function (x,y) {
//     return x + y;
// },handler);
//
// console.log(fproxy(2,3));
// console.log(new fproxy(2,3));
// console.log(fproxy.prototype);

//====================================================

//
// var person = {
//     name :'张三'
// };
//
// var proxy = new Proxy(person,{
//     get: function (target,property) {
//         if( property in target ){
//             return target[property];
//         } else {
//             throw new ReferenceError(`Property "${property}" does not exist.`);
//         }
//     }
// });
// console.log(proxy.name);
//
//
// let proto = new Proxy({},{
//     get(target,propertyKey,receiver){
//         console.log(`Get ${propertyKey}`);
//         return target[propertyKey];
//     }
// });
// let obj = Object.create(proto);
// obj.foo;

//====================================================
//
// function createArray(...elements) {
//     let handler = {
//         get(target,propKey,receiver){
//             debugger;
//             let index = Number(propKey);
//             if(index<0){
//                 propKey = String(target.length + index);
//             }
//             return Reflect.get(target,propKey,receiver);
//         }
//     };
//     let target = [];
//     target.push(...elements);
//     return new Proxy(target,handler)
// }
// let arr = createArray('a','b','c');
// console.log(arr[1]);



//====================================================

var pipe = (function () {
   return function (value) {
       var funcStack = [];
       var oproxy = new Proxy({},{
           get:function (pipeObject,fnName) {
               if(fnName === 'get'){
                    return funcStack.reduce(function (val,fn) {
                        return fn(val);
                    },value)
               }
           }
       });
       return oproxy;
   }
}());





