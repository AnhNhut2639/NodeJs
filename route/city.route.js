var express = require('express');
//var app = express()


var db = require('../db');
//shortid


var router = express.Router();
var cityController = require('../controller/City.controller');
var validate = require('../validate/validate.city');


router.get('/create',cityController.create);
router.post('/create',validate.post,cityController.post);
router.get('/search',cityController.search);


module.exports = router;