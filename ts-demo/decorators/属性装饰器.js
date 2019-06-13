/**
 *  参数1   对于静态成员是  构造函数  对于实例成员  原型对象
 *  参数2   成员的名字
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function watch(onChange) {
    if (!onChange) {
        return;
    }
    return function (target, key) {
        var _key = key + key;
        var __get = function () {
            return this[_key];
        };
        var __set = function (value) {
            if (this[_key] === value) {
                // 没有发生变化
                return;
            }
            else {
                // 发生了变化
                var oldValue = this[_key];
                this[_key] = value;
                var type = typeof onChange;
                if (type === 'function') {
                    // @ts-ignore
                    onChange(this[_key], oldValue);
                    // @ts-ignore
                }
                else if (type === 'string' && this[onChange]) {
                    this[onChange](this[_key], oldValue);
                }
                else {
                    console.log("\u6B64\u7C7B\u4E2D\u4E0D\u5B58\u5728\u6B64\u65B9\u6CD5");
                }
                console.log("\u53D1\u751F\u4E86\u53D8\u5316\uFF01\u65E7\u503C " + oldValue + "---------\u65B0\u503C  " + this[_key]);
            }
        };
        Object.defineProperty(target, key, {
            get: __get,
            set: __set,
            enumerable: true,
            configurable: true
        });
    };
}
function f(newValue, oldValue) {
    console.log(newValue, oldValue);
}
var Stu = /** @class */ (function () {
    function Stu() {
        this.age = 18;
    }
    __decorate([
        watch(f)
    ], Stu.prototype, "age", void 0);
    return Stu;
}());
var s = new Stu();
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
//# sourceMappingURL=属性装饰器.js.map