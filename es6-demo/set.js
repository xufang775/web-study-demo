const s = new Set();

[2,3,4,4,5,6,2,3].forEach(x=>s.add(x));

for(let i of s){
    console.log(i);
}

const set = new Set([1,2,3,2,3,5]);
console.log([...set]);
console.log(set.size);