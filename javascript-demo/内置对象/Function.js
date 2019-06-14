{
    let sum = new Function('a','b','return a+b');
    console.dir(Function);
    console.log(sum(2,3));
}
{
    let sayHello = new Function('name',`
        let age = 18;
        console.log(name,age);
        return 23;
    `);
    console.log(sayHello('xufang'));

}