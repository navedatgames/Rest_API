
const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.get('/students',function(req,res,next){
    try{
        Student.find({}).then(function(students){
            res.send(students);
        })
    }catch(error){
        console.log(error.message)
    }
});


router.post('/students',function(req,res,next){
    try{
        Student.create(req.body).then(function(student){
            res.send(student);
        })
    }
    catch(error){
        console.log(error.message)
    }
});


router.put('/students/:id',function(req,res,next){
    Student.findOneAndUpdate({_id: req.params.id},req.body).then(function(student){
        Student.findOne({_id: req.params.id}).then(function(student){
            res.send(student);
        });
    });
});


router.delete('/students/:id',function(req,res,next){
    Student.findOneAndDelete({_id: req.params.id}).then(function(student){
        res.send(student);
    });
});

module.exports = router;