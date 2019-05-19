require('dotenv').config();
//console.log(process.env.SESSION_SECRET);
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./route/city.route'); 
var mongoose = require('mongoose'); // use mongoose db
mongoose.connect(process.env.MONGO_URL);
//mongoose.connect('mongodb://localhost/express-demo');
//
var middle = require('./middleware/auth.middle');

var routenodemon = require('./route/testnodemon.route'); 
//product route
var sessionMiddleware = require('./middleware/session.middleware'); // tao session ID

var productRoute = require('./route/product.route');
var log = require('./route/auth.route');
var cartRoute = require('./route/cart.route');
var port = 3000
app.set('view engine', 'pug');
app.set('views','./views');

//dody parser
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(cookieParser('dfadfasd'));
app.use(sessionMiddleware); // anh huong den tat ca duong dan duoc su dung

//app.use(cookieParser(process.env.SESSION_SECRET));
//
//lowdb
var db = require('./db');
//short id


// require router vua tao


// public static file
app.use(express.static('public'));  


app.get('/',function(req , res){
    //res.send('you right');
    res.render('index',{
        name: 'Anh Nhut',        
    }); // trong localhost:3000 render ra file index.pug
});

// su dung call back router vua tao 
app.use('/city',middle.requireAuth,routes);
//app.use('/city',routes);
app.use('/',log);
app.use('/testnodemon',middle.requireAuth,routenodemon);
//app.use('/testnodemon',routenodemon);
//trang product
app.use('/product',productRoute);
app.use('/cart',cartRoute);
app.listen(port, () => console.log(`Deployed ${port}!`))

//