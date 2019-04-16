var db = require('../db');

module.exports.requireAuth= function(req,res,next){
    if(!req.cookies.ID){
        res.redirect('/login');
        return;
    }

    var user = db.get('citys').find({id: req.cookies.ID}).value();

    if(!user){
        res.redirect('/login');
        return;
    }
    next();

}   