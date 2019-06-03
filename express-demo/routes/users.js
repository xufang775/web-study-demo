var express = require('express');
var router = express.Router();
const {query} = require('../models/db');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test',async (req,res)=> {
    try{
      let sql = 'select * from user';
      const results = await query(sql);
      if(results){
        res.json(results);
      } else {
          res.json({success:false,message:'获取数据失败'});
      }
    }
    catch (error){
      res.json({success:false,message:'获取数据失败'});
    }
});

module.exports = router;
