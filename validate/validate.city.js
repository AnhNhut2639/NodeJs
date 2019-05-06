module.exports.post = function(req,res,next)
{
    var erorrs = [];
    if(!req.body.name){
        erorrs.push('Name is required ! ');
    }
    if(!req.body.phone){
        erorrs.push('Contact is required ! ');
    }

    if(erorrs.length)
    {
        res.render('city/create.pug',{
            erorrs: erorrs,
            values: req.body
        });
        return;
    }

    next();
}