
let mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({

 Name:String,
 Age:Number,
 Email:String

});

// Creat and export user model 
const User = mongoose.model('user', UserSchema);

module.exports=User;

