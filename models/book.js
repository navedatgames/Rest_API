const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    bookName:String,
    authorId:{
        type:mongoose.Schema.Types.ObjectId,ref:'Author'
    }

})

const Book = mongoose.model("Book",BookSchema)

module.exports = Book;