var express = require('express');
//var app = express()


var db = require('../db');
//shortid


var router = express.Router();
var cityController = require('../controller/City.controller');

router.get('/create',cityController.create);
router.post('/create',cityController.post);
router.get('/search',cityController.search);


module.exports = router;