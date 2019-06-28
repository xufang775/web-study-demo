function Person() {
    this.name = 'xufang';
}
var per1 = new Person();
function testFn() {
    console.log(testFn.name);
    console.log(this.name);

}
testFn.apply(Person);
testFn.apply(per1);
eval('testFn()');