const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'pug');
app.set('views','./views');


//app.get('/testnodemon', (req, res) => res.send('Hello World ! fxxk le van dat' ))  // arrow

app.get('/testnodemon',function(req , res){
   
    res.render('city/citys.pug',{
        city: [
            {name:'Long Xuyen' },
            {name :'HCM City'}
        ]
    });
});

app.get('/',function(req , res){
    //res.send('you right');
    res.render('index',{
        name: 'Anh Nhut',
         
    }); // trong localhost:3000 render ra file index.pug
});
app.listen(port, () => console.log(`Deployed ${port}!`))
