import cpuStat from 'cpu-stat'
import util from 'util'
const getUsagePerent = util.promisify(cpuStat.usagePercent)
const showCpu = async ()=>{
    const percent = await getUsagePerent()
    console.log(`CPU占用：${percent.toFixed(2)}%`);
    
}
export{showCpu}