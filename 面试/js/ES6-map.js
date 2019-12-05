const map = new Map([
    ['F', 'no'],
    ['T',  'yes'],
])

for(let key of map.keys()){
console.log(key)
}


{
    const responseList = [
        { id: 1, a: 1 },
        { id: 2, a: 2 },
        { id: 3, a: 3 },
        { id: 1, a: 1 },
    ];
    const result = responseList.reduce((acc,cur)=>{
        console.log(acc,cur)
        const ids = acc.map(item=>item.id);
        return ids.includes(cur.id) ? acc : [...acc,cur]
    },[{name:'xufang'}])
    console.log(result)
}