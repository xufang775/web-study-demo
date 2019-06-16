// 流操作
const fs = require('fs')
const rs1 = fs.createReadStream('./xufang.jpg')
const ws1 = fs.createWriteStream('./xufang02.jpg')
rs1.pipe(ws1)