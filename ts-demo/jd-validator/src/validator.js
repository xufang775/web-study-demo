"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validator = /** @class */ (function () {
    function Validator() {
        this.roles = {};
        // 存储解析的数据
        this.dataMap = new Map();
    }
    // 注册验证规则
    Validator.registered = function () { };
    // 解析数据
    Validator.prototype._parseData = function () { };
    Validator.customTypeMsg = {};
    Validator.customRuleF = {};
    Validator.validatorFnInstance = [];
    return Validator;
}());
exports.Validator = Validator;
//# sourceMappingURL=validator.js.map