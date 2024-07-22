const mongoose = require("mongoose")
mongoose.Connect("mongodb://localhost27017/react-login-tut")
.then(() => {
  console.log("Mongodb connnected")
})
.catch(() =>{
  console.log("Failed")
})


const newSchema =  new mongoose.Schema({
  username:{
    type:String,
    require: true
  },
  email:{
    type:String,
    require: true
  },
  password:{
    type:String,
    require: true
  }
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection