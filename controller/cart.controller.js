
var db = require('../db');

module.exports.addToCart = function(req,res,next){
    var productId = req.params.productId; // productId được truyền từ cart.routes
    var sessionId = req.signedCookies.sessionId;

    if(!sessionId){
        res.redirect('/product/search');
        return;

    }
    var count = db.get('sessions').find({id: sessionId}).get('cart.'+productId, 0).value();

    db.get('sessions')
    .find({ id: sessionId})
    .set('cart.'+ productId, count + 1) // khoi tao 1 key moi co ten la cart
    .write();

    res.redirect('/product/search');
     

};