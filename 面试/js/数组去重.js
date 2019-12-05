let originalArray = [1,2,3,4,5,3,2,4,1];

// 方式1，利用 Set 类型，它的成员是唯一的
{

    const result = Array.from(new Set(originalArray))
    console.log(result);

    const result2 = [...new Set(originalArray)];
    console.log(result2)
}

// 方式2，利用 Map
{
    const result = [];
    const map = new Map()
    for(let v of originalArray){
        if (!map.has(v)) {
            map.set(v,true);
            result.push(v)
        }
    }
    console.log(result)
}

// 方式 3,  利用 数组的includes 方法判断元素是否存在
{
    const result = [];
    for(let v of originalArray){
        if (!result.includes(v)) {
            result.push(v);
        }
    }
    console.log(result)
}

// 方式4，利用两层循环
{
    //
    let originalArray = [1,2,3,4,5,3,2,4,1];
    for(let i=0;i<originalArray.length;i++){
        for(let j = i+1;i<originalArray.length;j++){
            if (originalArray[i] === originalArray[j]) {
                originalArray.splice(j,1);
                j--
            }
        }
    }
    console.log(originalArray)
}