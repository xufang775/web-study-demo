// var myObject = {
//     foo:1,
//     bar:2,
//     get baz(){
//         return this.foo + this.bar;
//     }
// };
// console.log(Reflect.get(myObject, 'foo'));
// console.log(Reflect.get(myObject, 'bar'));

// ===============================================

// var myReceiverObject = {
//     foo:4,
//     bar:4
// };
// Reflect.get(myObject,'baz',myReceiverObject);

let p = {
    a:'a'
};
let handler = {
    set(target,key,value,receiver){
        console.log('set');
        Reflect.set(target,key,value,receiver);
    },
    defineProperty(target,key,attribute){
        console.log('defineProperty');
        Reflect.defineProperty(target,key,attribute);
    }
};
let obj = new Proxy(p,handler);
obj.a = 'A';



