var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ---------------------------没有返回值,或者 返回 undefined时，则相当于返回 target
function Log1(target) {
    console.log(target);
    return undefined;
}
var Stu1 = /** @class */ (function () {
    function Stu1() {
    }
    Stu1 = __decorate([
        Log1
    ], Stu1);
    return Stu1;
}());
var s1 = new Stu1();
console.log(s1);
// ---------------------------返回一个类，则会替换被装饰的类的构造函数
function Log2(target) {
    console.log(target);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.age = 10;
            return _this;
        }
        class_1.prototype.say = function () {
            console.log(this.age);
        };
        return class_1;
    }(target));
}
var Stu2 = /** @class */ (function () {
    function Stu2() {
    }
    Stu2 = __decorate([
        Log2
    ], Stu2);
    return Stu2;
}());
var s2 = new Stu2();
console.log(s2);
// ---------------------------没有返回值
function Log3(target) {
    console.log(target);
    return undefined;
}
var Stu3 = /** @class */ (function () {
    function Stu3() {
    }
    Stu3 = __decorate([
        Log3
    ], Stu3);
    return Stu3;
}());
var s3 = new Stu3();
console.log(s3);
//# sourceMappingURL=index.js.map