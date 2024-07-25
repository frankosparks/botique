const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Shan:admin@cluster0.dgczfio.mongodb.net/Pritt?retryWrites=true&w=majority")
.then(() => {
  console.log("Mongodb connnected")
})
.catch(() =>{
  console.log("Failed")
})  


const newSchema =  new mongoose.Schema({
  username:{
    type:String,
    required: true
  },
  email:{
    type:String,
    required: true
  },
  password:{
    type:String,
    required: true
  }
})

// const collection1 = new collection({
//   username:"frank",
//   email:"maina@gmail.com",
//   password:"234"
// })
const collection = mongoose.model("collection", newSchema)

module.exports = collection