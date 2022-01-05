const User = require('../models/user')

const userLogin = async function(req,res){
    console.log(req.body)
    
        const user = await User.findOne({
            email:req.body.email
        })

    

    if(user){
        res.status(201).json({
            message:"user found"
        })
    }
    else{
        res.status(500).json({
            message:'user not found'
        })
    }
}

module.exports = userLogin