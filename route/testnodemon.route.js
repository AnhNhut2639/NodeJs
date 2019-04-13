var express = require('express');
//var app = express()

// export db
 var db = require('../db');

//shortid


var cityController = require('../controller/City.controller');

var router = express.Router();
//

router.get('/',cityController.index);

router.get('/:id',cityController.dynamicRoute);




module.exports = router;