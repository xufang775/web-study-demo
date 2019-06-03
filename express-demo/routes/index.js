var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });


    res.json({success: false, message: '电话或密码错误'});

});

module.exports = router;
