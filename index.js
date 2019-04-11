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

var citys = [
    {name:'Long Xuyen' }, // name cua input text phai giong voi key o day
    {name :'HCM City'}
];

//app.get('/testnodemon', (req, res) => res.send('Hello World ! fxxk le van dat' ))  // arrow

app.get('/testnodemon',function(req , res){
   // testnodemon se hien thi file html citys.pug
    res.render('city/citys.pug',{
        city: citys
    });
});

app.get('/',function(req , res){
    //res.send('you right');
    res.render('index',{
        name: 'Anh Nhut',
         
    }); // trong localhost:3000 render ra file index.pug
});
// query parameter
app.get('/city/search',function(req,res){
    //console.log(req.query); // khi nhap ?q=th 
   var q = req.query.q;
   var matchedcity= citys.filter(function(item){
        return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
   });
   res.render('city/citys.pug',{
    city: matchedcity // render vao file html city/citys.pug va chi hien ra nhung thang duoc filter
    });
});
//POST
//tao duong dan moi & form de add them city
app.get('/city/create',function(req,res){
    res.render('city/create.pug');//file html create.pug
});
app.post('/city/create',function(req,res){
   // console.log(req.body);
   citys.push(req.body);
   res.redirect('/testnodemon');

});

app.listen(port, () => console.log(`Deployed ${port}!`))
// duong dan toi file hmtl dang pug