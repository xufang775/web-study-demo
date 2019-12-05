var it1 = makeIterator(['a','b']);

// it.next();

function makeIterator(array) {
    var nextIndex = 0;
    return {
        next:function () {
            return nextIndex < array.length ?
                {value:array[nextIndex++],done:false}:
                {value:undefined,done:true}
        }
    };
}
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());

// for(var i of it1){
//     console.log(i);
// }

//====================================================

var it = idMarker();
function idMarker() {
    var index = 0;
    return {
        next:function () {
            return {value:index ++,done:false}
        }
    }
}

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


//====================================================
class RangeIterator{
    constructor(start,stop){
        this.value = start;
        this.stop = stop;
    }
    [Symbol.iterator](){return this;}

    next(){
        var value = this.value;
        if (value < this.stop) {
            this.value ++;
            return {done:false,value:value};
        }
        return {done:true,value:undefined};
    }
}

function range(start,stop) {
    return new RangeIterator(start,stop);
}

for(var value of range(0,3)){
    console.log(value);
}

// ========================================================

function Obj(value) {
    this.value = value;
}
Obj.prototype[Symbol.iterator] = function () {
    var iterator = {next:next};

    var current = this;
    
    function next() {
        if (current) {
            var value = current.value;
            current = current.next;
            return { done:false , value:value};
        } else {
            return {done:true};
        }
    }
    return iterator
}
var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for(var i of one){
    console.log(i);
}

console.log(Symbol.iterator)

// =============================================

let set = new Set().add('a').add('b').add('c');
let [x,y] = set;
let [first,...rest] = set;
console.log(x,y,first,rest);


let generator = function * () {
    yield 1;
    yield *[2,3,4];
    yield 5;
};
var iterator = generator();

console.log(iterator.next());;
