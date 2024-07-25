// const express = require("express")
// const collection = require("./mongo")
// const cors = require("cors")
// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({extended : true}))
// app.use(cors())

// app.post('/', (req, res) => {
//   console.log('Request received:', req.body); // Log the request body
//   const { username, password } = req.body;
//   if (username === "correctUsername" && password === "correctPassword") {
//     res.send("exist");
//   } else {
//     res.send("notexist");
//   }
// });



// app.post("/register", async(res, req) =>{
//   const{username, email, password} = req.body

//   const data ={
//     username:username,
//     email:email,
//     password:password
//   }

//   try{
//     const check = await collection.findOne({email:email})
//     if(check){
//       res.json("exist")
//     }
//     else{
//       res.josn("notexist")
//       await collection.insertMany([data])
//     }
//   }
//   catch(e){
//     res.json("notexist")
//   }

// })

// app.listen(8000, () =>{
//   console.log("Port connected")
// })

const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Simple login route
app.post('/', async (req, res) => {
  console.log('Request received:', req.body);
  const { username, password } = req.body;
  try {
    const user = await collection.findOne({ username, password });
    if (user) {
      res.send("exist");
    } else {
      res.send("notexist");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error querying the database");
  }
});

// Registration route
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const data = {
    username: username,
    email: email,
    password: password
  };

  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      await collection.insertMany([data]);
      res.json("notexist");
    }
  } catch (e) {
    console.error(e);
    res.status(500).json("Error registering the user");
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
