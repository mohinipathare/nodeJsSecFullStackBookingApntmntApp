const Users=require('../models/Users');
module.exports={

saveUser:(req,res,)=>{
     //console.log('reqq',req);
     const errors=[];
     if(!req.body.usename)
     {
        errors.push({text:'please add username'});
     }
     if(errors.length>0)
     {
        res.send(errors);
     }
     else{
        Users.create({...req.body})
        .then(user=>{
            console.log(user)
        })
        .catch(err=>{
          console.log(err.code);
          if(err.code===11000)
          {
            res.send({msg:'can not accept duplicate entry'})
         }
         else{
            res.send({data:err});
         }
        })

     }
    }
}

