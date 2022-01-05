const User = require('../models/user')

const userSignup = async function(req,res){
    console.log(req.body)

    const user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    if(user){
        res.status(200).json({
            status:"signup sucessfully"
        })
    }
    else{
        res.status(500).json({
            status:"unable to signup"
        })
    }
}

module.exports = userSignup;