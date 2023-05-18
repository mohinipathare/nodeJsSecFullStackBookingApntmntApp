const express=require('express');

const User=require('../models/Users');

const router=express.Router();

router.get('/user',async (req,res,next)=>{
    
    try{
        const userData=await User.findAll();
        res.send(userData);
        }
        catch(err){
       console.log(err);
      }
});

router.get('/user/:id', async(req,res,next)=>{
    try{
        const userData=await User.findByPk(req.params.id);
        res.send(userData);
    }catch(err)
    {
        console.log(err);
    }
});

router.post("/user",async(req,res,next)=>{
    User.build(req.body)
    .save()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>res.send(err));
});

router.put("/user/:id",async(req,res,next)=>{
    try{
        const user={
            username:req.body.username,
            email:req.body.email,
            phonenumber:req.body.phonenumber
        }
        
        User.update(user,{where : {id:req.params.id} });
        res.send(user);
    }
    catch(err)
        {
            console.log(err);
        }
});

router.delete("/user/:id",async(req,res,next)=>
{
    try{
        const data=await User.destroy({where:{id:req.params.id}});
        res.send("deleted");
        }
        catch(err)
        {
            console.log(err);
        }
});
module.exports=router;