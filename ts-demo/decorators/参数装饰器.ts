// 参数装饰器
/**
 * 装饰器函数
 * @param target   对于静态成员 构造函数；对于实例成员 原型对象
 * @param {string} key  参数名称
 * @param {number} index  参数列表中的索引
 */
function addMetada(target:any,key:string,index:number){
    const _metada = `addMetada ${key} index -- ${index}`;
    target['_metada'] = _metada;
}


class Stu{
    name:string = '小明';
    say(@addMetada logMsg:string){   // nest
        console.log(logMsg);
        return logMsg;
    }
    sayHi(){

    }
}
const s = new Stu();
console.log(s.say('哈哈'));
console.log(s);
console.log(Stu.prototype);

