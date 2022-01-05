const express = require('express');
const mongoose = require('mongoose');

//setup
const app = express();


try{
mongoose.connect('mongodb+srv://naved:9999@cluster0.jr5op.mongodb.net/navedDatabase?retryWrites=true&w=majority');

}
catch(error){
    console.log(error.message,"unable to connect to db")
}
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());

app.use('/api',require('./router/authRouter'))
app.use('/api',require('./router/bookRouter'))
app.use('/api',require('./router/userSignup'))
app.use('/api',require('./router/userLogin'))

//global error
app.use(function(req,res,error,next){
     res.status( 400 || 401 || 500).send({
         error:{
             message:error.message
         }
     })
 })

app.listen(process.env.port || 8081, function(){
    console.log('Ready to Go! at 8081');
});