const express=require('express');
const router=express.Router();
const User=require('../../model/user');
 
//get all users
router.get('/',function(req,res){
    User.find()
        .then((users)=>{
            res.json(users);
        })
        .catch((err)=>{
            console.log(err);
        })
});

//get single user by id
router.get('/:id',function(req,res){
    let id=req.params.id;
    User.findById(id)
    .then((user)=>{
        res.json(user);
    })
    .catch(err=>console.log(err));
})

//create a user
router.post('/add',function(req,res){

    const name=req.body.name;
    const content=req.body.content;

    newUser = new User({
        name:name,
        content:content
    });
    newUser.save()
        .then((user)=>{
            res.json(user);
        })
        .catch(err=>console.log(err));

})

//update a post
router.put('/update/:id',function(req,res){
    //finding the post
    let id=req.params.id;
    User.findById(id)
    .then((user)=>{

        user.name=req.body.name;
        user.content=req.body.content;
        user.save()
        .then(user=>{
            res.send({
                message:'Post Updated Successfully',
                status:'success',
                user:user
            })
        })
        .catch(err=>console.log(err));

    })
    .catch(err=>console.log(err));
})

//deleting the user

router.delete('/delete/:id',function(req,res){

    let id=req.params.id;
    User.findById(id)
    .then((user)=>{

       
        user.delete()
        .then(user=>{
            res.send({
                message:'Post deleted Successfully',
                status:'success',
                user:user
            })
        })
        .catch(err=>console.log(err));

    })
    .catch(err=>console.log(err));

})



module.exports=router;