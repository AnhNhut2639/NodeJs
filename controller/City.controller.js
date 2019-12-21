var db = require('../db');
var shortid = require('shortid');
// testnodemon
module.exports.index = function(req , res){
    // testnodemon se hien thi file html citys.pug
     res.render('city/citys.pug',{
         city: db.get('citys').value() // get du lieu da mac dinh o file db.josn trong '' phai giong voi key trong file moi get duoc
         //city o day giong voi city o file citys.pug
        });
};
    
module.exports.dynamicRoute = function(req,res){
    var id = req.params.id;
    var city = db.get('citys').find({id: id }).value()
    res.render('city/view.pug',{
        tp: city   // tp o day giong voi tp o city/view
    });
}
// city
module.exports.create = function(req,res){
    res.render('city/create.pug');}

module.exports.post = function(req,res){

    req.body.id = shortid.generate(); //tao id ngau nhien bang shortid
    req.body.avatar = req.file.path.split('/').slice(1).join('/');
    db.get('citys').push(req.body).write() // lay du lieu tu database va push 
    res.redirect('/testnodemon');
}

module.exports.search = function(req,res){ //action trong form
    //console.log(req.query); // khi nhap ?q=th 
   var q = req.query.q;
   var matchedcity= db.get('citys').value().filter(function(item){
        return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
   });
   res.render('city/citys.pug',{
    city: matchedcity // render vao file html city/citys.pug va chi hien ra nhung thang duoc filter
    });
}