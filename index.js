const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 3000
app.set('view engine', 'pug');
app.set('views','./views');

//dody parser
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
//
//lowdb
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);
//short id
var shortid = require('shortid');
db.defaults({ citys: []}) // tao mac dinh cho file db.json
  .write()
  //
// var citys = [
//     {name:'Long Xuyen' }, // name cua input text phai giong voi key o day
//     {name :'HCM City'}
// ];

//app.get('/testnodemon', (req, res) => res.send('Hello World ! fxxk le van dat' ))  // arrow

app.get('/testnodemon',function(req , res){
   // testnodemon se hien thi file html citys.pug
    res.render('city/citys.pug',{
        city: db.get('citys').value() // get du lieu da mac dinh o file db.josn trong '' phai giong voi key trong file moi get duoc
        //city o day giong voi city o file citys.pug
    });
});

app.get('/',function(req , res){
    //res.send('you right');
    res.render('index',{
        name: 'Anh Nhut',
         
    }); // trong localhost:3000 render ra file index.pug
});
// query parameter
// app.get('/city/search',function(req,res){
//     //console.log(req.query); // khi nhap ?q=th 
//    var q = req.query.q;
//    var matchedcity= citys.filter(function(item){
//         return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
//    });
//    res.render('city/citys.pug',{
//     city: matchedcity // render vao file html city/citys.pug va chi hien ra nhung thang duoc filter
//     });
// });
//query parameter + lowdb
// app.get('/city/search',function(req,res){
//     //console.log(req.query); // khi nhap ?q=th 
//    var q = req.query.q;
//    //find
//   var matchedcity = db.get('citys').find({q}).value()  
//    res.render('city/citys.pug',{
//     city : db.get('citys').value().matchedcity // render vao file html city/citys.pug va chi hien ra nhung thang duoc filter
//     });
// });
app.get('/testnodemon/:id',function(req,res){
    var id = req.params.id;
    var city = db.get('citys').find({id: id }).value()
    res.render('city/view.pug',{
        tp: city   // tp o day giong voi tp o city/view
    });
});

//POST
//tao duong dan moi & form de add them city
app.get('/city/create',function(req,res){
    res.render('city/create.pug');//file html create.pug
});
// app.post('/city/create',function(req,res){
//    // console.log(req.body);
//    citys.push(req.body); // push vao citys va file hien thi citys la citys.pug
//    res.redirect('/testnodemon');

// });

app.post('/city/create',function(req,res){
    // console.log(req.body);
    req.body.id = shortid.generate(); //tao id ngau nhien bang shortid
    db.get('citys').push(req.body).write() // lay du lieu tu database va push 
    res.redirect('/testnodemon');
 
 });

app.listen(port, () => console.log(`Deployed ${port}!`))
// duong dan toi file hmtl dang pug