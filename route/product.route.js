var express = require('express');

var router = express.Router();
var productController = require('../controller/product.controller');

router.get('/search',productController.indexProduct);

module.exports = router;