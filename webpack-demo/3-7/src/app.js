import base from './less/base.less'
import common from './less/common.less'

var app = document.getElementById('app');
app.innerHTML = `<div class="${base.box}"></div>`;
// var flag = false;
// setInterval(function () {
//     if(flag){
//         base.unuse();
//     } else {
//         base.use();
//     }
//     flag = !flag;
// },500);
