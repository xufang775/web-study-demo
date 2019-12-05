var inherit = (function (c,p) {
    var F = function () {};
    return function (c,p) {
        F.prototype = p.prototype;
        c.prototype = new F();
        c.uber = p.prototype;
        c.prototype.constructor = c;
    }
})();
//
// var Person = function (name) {
//     this.name = 'xiaoxiao'
// }
// var Student = function (cla) {
//     this.class = cla
// }
//
// let aa = inherit();
// console.log(aa);
// var xiao = new Student('class 1-1');
//
// console.log(xiao)
// console.log(xiao.name)