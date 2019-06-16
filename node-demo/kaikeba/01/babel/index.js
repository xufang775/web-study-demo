@testable
class MyClass{}
function testable(target){
    target.isTestable = true
}
MyClass.isTestable;