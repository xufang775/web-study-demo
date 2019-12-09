// const dom = new Proxy({},{
//     get(target,property){
//         return function (attrs = {},...children) {
//             const el = document.createElement(property);
//             for(let prop of Object.keys(attrs)){
//                 el.setAttribute(prop,attrs[prop]);
//             }
//             for (let child of children){
//                 if (typeof child === 'string'){
//                     child = document.createTextNode(child);
//                 }
//                 el.appendChild(child);
//             }
//             return el;
//         }
//     }
// });
//
// const el = dom.div({},
//     'Hello, my name is ',
//     dom.a({href: '//example.com'}, 'Mark'),
//     '. I like:',
//     dom.ul({},
//         dom.li({}, 'The web'),
//         dom.li({}, 'Food'),
//         dom.li({}, '…actually that\'s it')
//     )
// );
// document.body.appendChild(el);

//=================================================

// const proxy = new Proxy({},{
//     get:function (target,property,receiver) {
//         return receiver;
//     }
// });
// console.log(proxy.getReceiver === proxy);
// console.log(proxy)

const target = Object.defineProperties({},{
    foo:{
        value:123,
        writable:false,
        configurable:false
    },
});
const handler = {
    get(target,propKey){
        return 'abc';
    }
};
const proxy = new Proxy(target,handler);

 proxy.foo