// 方法装饰器

/**
 *
 * @param target: 对于静态成员 构造函数；对于实例成员 原型对象
 * @param {string} key：成员名称
 * @param {PropertyDecorator} descriptor：属性描述符对象
 */
function LogMethod(target:any,key:string,descriptor:PropertyDescriptor){
    console.log('----------------开始打印装饰器三个参数---------------')
    // 保存原来的方法的引用
    const oldMethod = descriptor.value;
    console.log('旧函数如下:');
    console.log(oldMethod);
    console.log('要覆盖的对象',target);
    console.log('成员名称',key);
    console.log('属性描述符对象',descriptor);
    console.log('\n\n\r');

    descriptor.value = function (...args:any[]) {
        console.log(args);
        const result = oldMethod.apply(this,args);
        return result;
    }
    return descriptor;
}

class Stu{
    constructor(){
        console.log('我是构造函数');
    }
    @LogMethod
    say(logMsg:string){
        console.log(logMsg);
        return logMsg;
    }
    @LogMethod
    static sayHi(){
        console.log('你好')
    }

    get name(){

    }
}
console.log(Stu.prototype);


console.log('----------------开始对类进行实例化---------------')
const s = new Stu();
const res = s.say('哈哈');
console.log(res);