const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Shan:admin@cluster0.dgczfio.mongodb.net/Pritt")
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

// const collection1 = new collection({
//   username:"frank",
//   email:"maina@gmail.com",
//   password:"234"
// })
const collection = mongoose.model("collection", newSchema)

module.exports = collection