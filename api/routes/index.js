var express = require('express');
var router = express.Router();
const controllers = require('../controllers/index')
const path = require("path")
require("dotenv").config({
  path:path.resolve(__dirname,"../.env")
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express is running' + process.env.MYNAME });
});


router.get('/locations',controllers.getAllLocations)

module.exports = router;
