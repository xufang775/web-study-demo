var i = 0;
var j = 8;

checkiandj: while (i < 4) {
    console.log('i: ' + i);
    i += 1;

    checkj: while (j > 4) {
        console.log('j: ' + j);
        j -= 1;

        if ((j % 2) == 0)
            continue checkj;
        console.log(j + ' is odd.');
    }
    console.log('i = ' + i);
    console.log('j = ' + j);
}