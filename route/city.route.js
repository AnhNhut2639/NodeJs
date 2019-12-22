var express = require('express');
//var app = express()
var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' })

var db = require('../db');
//shortid


var router = express.Router();
var cityController = require('../controller/City.controller');
var validate = require('../validate/validate.city');


router.get('/create',cityController.create);
router.post('/create',
upload.single('avatar'), //field có name là avatar
validate.post,cityController.post);


router.get('/search',cityController.search);


module.exports = router; 