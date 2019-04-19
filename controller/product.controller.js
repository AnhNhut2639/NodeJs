var db = require('../db');
var shortid = require('shortid');

module.exports.indexProduct = function(req,res){
    res.render('product/product',{
        products: db.get('citys').value()
    });
}