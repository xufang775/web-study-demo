import base from './css/base.css'
import common from './css/common.css'

var flag = false;
setInterval(function () {
    if(flag){
        base.unuse();
    } else {
        base.use();
    }
    flag = !flag;
},500);
