const express= require ('express')
const app=express()

const mongoose = require("mongoose");
  
const User = require("./Models/User");
  
  // Database connection :Connect to MongoDB
 
  mongoose.connect("mongodb+srv://wafa:wafa123456@cluster0.0bj0j.mongodb.net/person?retryWrites=true&w=majority " ,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err)=>
    {if (err){ console.log("Database connection error")}
    else { console.log("Database connection successful")}
    });
  
   
  
app.use(express.json())



app.listen(5002,(err)=>{err ? console.log(err): console.log("server run ")} )



// Create users
 //  User.create([{Name:"Wafa",Age:30,Email:"wafah@gmail.com"},{Name:"ahlem",Age:21,Email:"ahlem@gmail.com"},{Name:"nourmina",Age:22,Email:"nourin@gmail.com"}]) 

  // get users
//   app.get("/users", (req, res) =>User.find() .then((el) => res.json(el)) .catch((err) => console.log(err)) );

//   add user
//   app.post("/add-user", (req, res) => {
  // let newUser = new User(req.body);
//     newUser.save().then(() => res.json({ msg: "User added " })).catch((err) => console.log(err)); });

//  edit user by id
//  app.put('/edit_user/:id',(req,res)=>{
//   User.findByIdAndUpdate(req.params.id,{ $set:req.body},{new:true})
//   .then((el)=>res.json(el)).catch((err)=>console.log(err))
// }
// )

//  delete user by id
// app.delete('/delete_user/:id',(req,res)=>{

//   User.deleteOne({_id:req.params.id})
//   .then((el)=>res.json(el)).catch((err)=>console.log(err))

// })