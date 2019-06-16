const os = require('os');
const util = require('util');
const mem = os.freemem() / os.totalmem() * 100
console.log(`内存占用${mem.toFixed(2)}%`)

const cpuStat = require('cpu-stat')
const getCpu = util.promisify(cpuStat.usagePercent)
cpuStat.usagePercent((err,percent)=>{
    console.log(`CPU占用：${percent.toFixed(2)}%`);
})

getCpu()
.then(precent=>{
    console.log(`CUP占用：${precent.toFixed(2)}%`);
})

const showStat = async() =>{
    const mem = os.freemem() / os.totalmem * 100
    console.log(`内存占用${mem.toFixed(2)}%`)
    const percent = await getCpu()
    // console.log(`CPU占用:${percent.toFixed(2)}%`)
}