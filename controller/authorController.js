const Author = require('../models/author')

const createName = async function(req,res){
        console.log(req.body.name)

        const user = await Author.create({
            name:req.body.name
        })

        if(user){
            res.status(200).json({
                status:"name created"
            })
        }
        else{
            res.status(500).json({
                status:"name not created"
            })
        }
}

module.exports = createName