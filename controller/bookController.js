const Author = require('../models/author')
const Book = require('../models/book')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const saveBook = async function(req,res){

    const author = await Author.find({
        _id:req.body.authorId
    })

    if(!author){
        res.status(404).json({
            status:'author not found'
        })
    }
    else{
        const book = await Book.create({
            _id: mongoose.Types.ObjectId(),
            bookName:req.body.bookName,
            authorId:author._id

        })

        if(book){
            res.status(201).json({
                message:"book stored",
                authorName : author[0].name,
                book:book,
            })
        } else {
            res.status(500).json({
                message:"book not stored! Error"
            })
        }


    }
}
module.exports = saveBook