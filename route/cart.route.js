var express = require('express');
//var app = express()
var db = require('../db');

var router = express.Router();
var authController = require('../controller/cart.controller');
var validate = require('../validate/validate.city');

router.get('/add/:productId',authController.addToCart); // productId là params sẽ được truyền qua cart.controller để làm tham số

module.exports = router;