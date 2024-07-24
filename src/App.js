const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())


app.post("/", async(res, req) =>{
  const{username, password} = req.body

  try{
    const check = await collection.findOne({username:username})
    if(check){
      res.json("exist")
    }
    else{
      res.josn("notexist")
    }
  }
  catch(e){
    res.json("notexist")
  }

})


app.post("/register", async(res, req) =>{
  const{username, email, password} = req.body

  const data ={
    username:username,
    email:email,
    password:password
  }

  try{
    const check = await collection.findOne({email:email})
    if(check){
      res.json("exist")
    }
    else{
      res.josn("notexist")
      await collection.insertMany([data])
    }
  }
  catch(e){
    res.json("notexist")
  }

})

app.listen(8000, () =>{
  console.log("Port connected")
})