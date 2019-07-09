// require.include('./moduleA');
import _ from 'lodash';
var page = 'subpageA';
if(page === 'subpageA'){
    // require.ensure([],function () {
    //     var subpageA = require('./subPageA')
    // },'subPageA');
    import(/* webpackChunkName:'subpageA' */'./subPageA').then(function (subPageA) {
        console.log(subPageA);
    })

} else if(page === 'subpageB'){
    // require.ensure([],function () {
    //     var subpageA = require('./subPageB')
    // },'subPageB');
    import(/* webpackChunkName:'subpageA' */'./subPageB').then(function (subPageB) {
        console.log(subPageB);
    })
}

// require.ensure(['lodash'],function () {
//     var _ = require('lodash');
//     _.join(['1','2'],'3');
// },'vendor');


export default 'pageB'