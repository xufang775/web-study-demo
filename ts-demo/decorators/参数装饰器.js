var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 参数装饰器
/**
 * 装饰器函数
 * @param target   对于静态成员 构造函数；对于实例成员 原型对象
 * @param {string} key  参数名称
 * @param {number} index  参数列表中的索引
 */
function addMetada(target, key, index) {
    var _metada = "addMetada " + key + " index -- " + index;
    target['_metada'] = _metada;
}
var Stu = /** @class */ (function () {
    function Stu() {
        this.name = '小明';
    }
    Stu.prototype.say = function (logMsg) {
        console.log(logMsg);
        return logMsg;
    };
    Stu.prototype.sayHi = function () {
    };
    Object.defineProperty(Stu.prototype, "age", {
        get: function () {
            return 18;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __param(0, addMetada)
    ], Stu.prototype, "say", null);
    return Stu;
}());
var s = new Stu();
console.log(s.say('哈哈'));
console.log(s);
console.log(Stu.prototype);
//# sourceMappingURL=参数装饰器.js.map