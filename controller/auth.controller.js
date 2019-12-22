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

    if(user.pass !== hashpass){
        res.render('auth/login',{
            erorrs:[
                'sai pass'
            ],
            values: req.body
        });
        return;
    }
    res.cookie('ID',user.id,{ //neu tai khoan dung thi tao tao ta 1 cookie tu chinh id cua tai khoan đó // và sau khi đăng nhâp thành công thì sẽ tạo thêm 1 chuỗi để thêm vào cookie ID mà được tạo hash từ chuỗi ở dòng 30 ở index.js
        signed: true // signed ở đây là mặc định(boolean) 
    });
    res.redirect('/testnodemon');
};