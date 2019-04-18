var db = require('../db');

module.exports.requireAuth= function(req,res,next){
    if(!req.signedCookies.ID){
        res.redirect('/login');
        return;
    }

    var user = db.get('citys').find({id: req.signedCookies.ID}).value();

    if(!user){
        res.redirect('/login');
        return;
    }

    res.locals.userN = user;

    next();

}   