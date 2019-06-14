// 方法装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 *
 * @param target: 对于静态成员 构造函数；对于实例成员 原型对象
 * @param {string} key：成员名称
 * @param {PropertyDecorator} descriptor：属性描述符对象
 */
function LogMethod(target, key, descriptor) {
    console.log('----------------开始打印装饰器三个参数---------------');
    // 保存原来的方法的引用
    var oldMethod = descriptor.value;
    console.log('旧函数如下:');
    console.log(oldMethod);
    console.log('要覆盖的对象', target);
    console.log('成员名称', key);
    console.log('属性描述符对象', descriptor);
    console.log('\n\n\r');
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        var result = oldMethod.apply(this, args);
        return result;
    };
    return descriptor;
}
var Stu = /** @class */ (function () {
    function Stu() {
        console.log('我是构造函数');
    }
    Stu.prototype.say = function (logMsg) {
        console.log(logMsg);
        return logMsg;
    };
    Stu.sayHi = function () {
        console.log('你好');
    };
    __decorate([
        LogMethod
    ], Stu.prototype, "say", null);
    __decorate([
        LogMethod
    ], Stu, "sayHi", null);
    return Stu;
}());
console.log(Stu.prototype);
console.log('----------------开始对类进行实例化---------------');
var s = new Stu();
var res = s.say('哈哈');
console.log(res);
//# sourceMappingURL=方法装饰器.js.map