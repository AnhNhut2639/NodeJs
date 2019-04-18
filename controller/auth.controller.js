var db = require('../db');
var md5 =require('md5');
module.exports.login = function(req,res){
    res.render('auth/login');
};

module.exports.postLogin = function(req,res){
    var email = req.body.email;
    var pass = req.body.pass;

  var user =  db.get('citys').find({email: email}).value();
    if(!user)
    {
        res.render('auth/login',{
            erorrs:[
                'sai email'
            ],
            values: req.body
        });
        return;
    }
    var hashpass =md5(pass);

    if(user.pass !== hashpass ){
        res.render('auth/login',{
            erorrs:[
                'sai pass'
            ],
            values: req.body
        });
        return;
    }
    res.cookie('ID',user.id,{
        signed: true
    });
    res.redirect('/testnodemon');
};