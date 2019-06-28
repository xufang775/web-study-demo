import {JdValidator} from 'jd-validator'

const v = new JdValidator();
// 验证规则
const rules = {
    a:['required','in12']
};

// 被验证的数据
const data = {a:'121'};
v.make(rules,data);
if(v.fails()){
    console.log(v.getMessages());
}