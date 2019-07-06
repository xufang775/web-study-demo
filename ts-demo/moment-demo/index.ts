import moment = require("moment");
const _for='yyyy-mm-dd'.toLocaleUpperCase();
let today = moment();

console.log(today);
console.log(today.week());
console.log(today.days());


// 
console.log(moment('2019-01-01').days());
console.log(moment('2019-01-01').dayOfYear());
console.log(moment('2019-01-21').dayOfYear());
console.log(moment('2019-02-21').dayOfYear());
console.log(moment('2018-12-31').dayOfYear());
console.log(moment('2019-12-31').dayOfYear());
console.log(moment().dayOfYear(17));

//--------------------------------
let str = `
moment().week(25);
moment().week(); 
moment().month(1);
moment().month(0); 
`
str.split(';').forEach(i=>{
    console.log(eval(i));
})

//------------------
console.log(moment('2019-02').format(_for));;

console.log(moment().quarter(1).format(_for));
console.log(moment().weeksInYear());
console.log(moment('2019-12-28').week())
console.log(moment('2019-12-29').week())



console.log(moment().startOf('week'));

console.log(moment().isoWeekday(1));
console.log(moment().isoWeeksInYear());
console.log(moment('2019-12-29').isoWeeksInYear());
let aa='2019';
console.log(`${parseInt(aa)-1}`);
const dArr = [1,2,3];

let [year,month,day] = '2019-12'.split('-').map(m=>parseInt(m));
console.log(year,month,day);

console.log(moment().isoWeek(26));
// console.log(moment().startOf(moment().isoWeek(26)));
console.log('--------------------')
console.log(moment().year(2019).isoWeek(26).startOf('isoWeek'));
console.log(moment().year(2019).isoWeek(26).endOf('isoWeek'));
console.log(moment().year(2019).month(0).day(24).format(_for));
// console.log(moment('2019-06-04').startOf('isoWeek'));
// console.log(moment('2019-06-04').endOf('isoWeek'));
// console.log(moment('2019-6-29').format(_for));


function getDateRangeForWeek(val='2019-26'){
    let dateArr=[];
    if(typeof val === 'string'){
        if(val.indexOf('-')>0){
            dateArr = val.split('-');
        } else {
            dateArr = [moment().year(),val];
        }
    }
    if(typeof val === 'number'){
        dateArr = [moment().year(),val];
    }
    // 获取第一周剩下几天
    const daysForFirstWeek =7- moment(`${dateArr[0]}-01-10`).days();
    // （总天数-第一周的剩余天数）/ 7 = 第几周
}