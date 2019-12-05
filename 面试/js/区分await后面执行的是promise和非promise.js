async function t1 () {
    console.log(1)
    console.log(2)
    new Promise( function ( resolve ) {
        console.log( 'promise3' )
        resolve();
    } ).then( function () {
        console.log( 'promise4' )
    } )
    await new Promise( function ( resolve ) {
        console.log( 'b' )
        resolve();
    } ).then( function () {
        console.log( 't1p' )
    } )

    console.log(3)
    console.log(4)
    new Promise( function ( resolve ) {
        console.log( 'promise5' )
        resolve();
    } ).then( function () {
        console.log( 'promise6' )
    } )
}



setTimeout( function () {
    console.log( 'setTimeout' )
}, 0 )

async function t2() {
    console.log(5)
    console.log(6)
    await Promise.resolve().then(() => console.log('t2p'))
    console.log(7)
    console.log(8)
}

t1()
new Promise( function ( resolve ) {
    console.log( 'promise1' )
    resolve();
} ).then( function () {
    console.log( 'promise2' )
} )
t2()

console.log('end');

/*
输出：
1
2
promise3
b
promise1
5
6
end
promise4
t1p
promise2
t2p
3
4
promise5
7
8
promise6
setTimeout
 */