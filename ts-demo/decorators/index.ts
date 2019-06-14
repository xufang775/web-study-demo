// ---------------------------没有返回值,或者 返回 undefined时，则相当于返回 target
    function Log1(target:any){
        console.log(target);
        return undefined;
    }
    @Log1
    class Stu1{

    }
    const s1 = new Stu1();
    console.log(s1);

// ---------------------------返回一个类，则会替换被装饰的类的构造函数
    function Log2(target:any){
        console.log(target);
        return class extends target{
            age = 10;
            say(){
                console.log(this.age);
            }
        }
    }
    @Log2
    class Stu2{

    }
    const s2 = new Stu2();
    console.log(s2);

// ---------------------------没有返回值
function Log3(target:any){
    console.log(target);
    return undefined;
}
@Log3
class Stu3{

}
const s3 = new Stu3();
console.log(s3);


