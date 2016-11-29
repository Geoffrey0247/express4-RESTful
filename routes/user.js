/**
 * Created by Sandeep on 01/06/14.
 */

var User=require('../models/user');
var express=require('express');

//configure routes

var router=express.Router();

router.route('/user')
    .get(function(req,res){
       User.find(function(err,user){
           if(err)
                res.send(err);
           res.json(user);
       });
    })

    .post(function(req,res){
        var user=new User(req.body);
        User.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'User Added'});
        });
    });

router.route('/user/:id')
    .put(function(req,res){
        User.findOne({_id:req.params.id},function(err,user){

            if(err)
                res.send(err);

           for(prop in req.body){
                user[prop]=req.body[prop];
           }

            // save the user
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User updated!' });
            });

        });
    })

    .get(function(req,res){
        User.findOne({_id:req.params.id},function(err, user) {
            if(err)
                res.send(err);

            res.json(user);
        });
    })

    .delete(function(req,res){
        User.remove({
            _id: req.params.id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports=router;
