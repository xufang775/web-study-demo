/**
 *  参数1   对于静态成员是  构造函数  对于实例成员  原型对象
 *  参数2   成员的名字
 */

function watch(onChange?:Function | string){
    if (!onChange) {
        return;
    }
    return (target:any, key:string) =>{
        const _key = key + key;
        const __get = function () {
            return this[_key];
        }
        const __set = function (value:any) {
            if(this[_key] === value){
                // 没有发生变化
                return;
            } else {
                // 发生了变化
                const oldValue = this[_key];
                this[_key] = value;

                const type = typeof onChange;
                if (type === 'function') {
                    // @ts-ignore
                    onChange(this[_key],oldValue);
                    // @ts-ignore
                } else if(type === 'string' && this[onChange]){

                    this[onChange as string](this[_key],oldValue);
                } else {
                    console.log(`此类中不存在此方法`);
                }

                console.log(`发生了变化！旧值 ${oldValue}---------新值  ${this[_key]}`);
            }
        }

        Object.defineProperty(target,key,{
            get:__get,
            set:__set,
            enumerable:true,
            configurable:true
        });
    }
}
function f(newValue,oldValue){
    console.log(newValue,oldValue);
}
class Stu{
    @watch(f)
    age = 18;
}
const s = new Stu();
s.age = 10;

/*
function watch(target:any, key:string){
    const _key = key + key;
    const __get = function () {
        return this[_key];
    }
    const __set = function (value:any) {
        if(this[_key] === value){
            // 没有发生变化
            return;
        } else {
            // 发生了变化
            const oldValue = this[_key];
            this[_key] = value;
            console.log(`发生了变化！旧值 ${oldValue}---------新值  ${this[_key]}`);
        }
    }

    Object.defineProperty(target,key,{
       get:__get,
       set:__set,
        enumerable:true,
        configurable:true
    });
}

class Stu{
    @watch
    age = 18;
}
const s = new Stu();
s.age = 10;
*/