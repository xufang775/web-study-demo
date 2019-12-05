var Person = function () {
    this.sex = 12;

    // return {
    //     name:'xufang'
    // }
}
var zs = new Person();
console.log(zs)

var new2 = function (func) {
    var o = Object.create(func.prototype);
    var k = func.call(o);
    if (typeof k === 'object') {
        return k;
    }
    return o;
}

var o6 =new2(Person)
console.log(o6)
console.log(o6.__proto__.constructor === Person);