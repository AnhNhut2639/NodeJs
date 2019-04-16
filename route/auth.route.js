var express = require('express');
//var app = express()
var db = require('../db');

var router = express.Router();
var authController = require('../controller/auth.controller');
var validate = require('../validate/validate.city');

router.get('/login',authController.login);
router.post('/login',authController.postLogin);

module.exports = router;