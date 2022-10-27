var express = require('express');
var router = express.Router();
const controllers = require('../controllers/index')
const path = require("path");
const { result } = require('lodash');
require("dotenv").config({
  path:path.resolve(__dirname,"../.env")
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express is running' + process.env.MYNAME });
});

//use department find department rooms
router.get('/departmentRoom/:query',controllers.getDepartmentRooms) 

//find all department
/* router.get('/hospitalDepartment',controllers.getDepartment)  */


//find room use room id
router.get('/getSingleRoom/:category/:idd',controllers.getSingleRoom) 

//hospital total
router.get('/hospitalTotal',controllers.getTotalNum) 

//各个部门+人数
router.get("/departmentTotal",controllers.getDepartmentNum)


router.get('/test',controllers.test) 



module.exports = router;
