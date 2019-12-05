import _ from 'lodash';
import printMe from './print.js';
import {cube} from './math.js';
import './style.css';
import sass from './style2.scss';
import img from './zk.jpeg';
import Data from './data.xml';

if(process.env.NODE_ENV !== 'production'){
    console.log('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = [
        'Hello webpack',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n'); // _.json(['Hello','webpack'],' ');

    element.classList.add('hello');

    // var myImage = new Image();
    // myImage.src = img;
    // element.appendChild(myImage);

    btn.innerHTML = '点击';
    btn.onclick = printMe();
    element.appendChild(btn);
    
    console.log('这是测试')


    console.log(Data);

    return element;
}
document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./print.js',function () {
        console.log('Accepting the update printMe module!');
        printMe();
    })
}