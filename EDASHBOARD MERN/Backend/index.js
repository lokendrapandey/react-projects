const cors = require("cors")
const express = require('express')
require('./DB/config')
const User = require('./DB/User')
const app = express();
const Product = require('./DB/Product')

const jwt = require('jsonwebtoken')
const jwtKey = "lokendrapandey"; 


app.use(cors());
app.use(express.json());

app.post("/register", async (req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
    console.log(result)
})

app.post("/login",async (req, resp) => {
    try {
        let user = await User.findOne(req.body).select("-password");
        
        if (user) {
          jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
            if(err){
              resp.send({result : "something went wrong , please try again later"})
            }
            resp.send({user,auth:token})

          })
            // resp.send(user);
        } else {
            resp.send({ result: "no user found" }); // Corrected "find" to "found" and added semicolon
        }
    } catch (error) {
        resp.status(500).send({ error: "Internal server error" }); // Handling potential errors
    }
});


app.post("/add-Product", async (req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result)
  })
  

  
  app.get("/products", async (req,resp)=>{
    let products = await Product.find();
    resp.send(products)
    if(products.length > 0){
    }
    else{
      resp.send({ result:"no product found "}) 
    }
    
  })
    
    app.delete("/product/:id", async (req,resp)=>{
        // resp.send(req.params.id);
        const result = await Product.deleteOne({_id:req.params.id})
        resp.send(result);
    })

  
  
  app.get("/product/:id",  async (req, resp)=>{
    let result = await Product.findOne({_id:req.params.id});
    // if(result){
      resp.send(result)
    //   resp.send({result :"no record found"})
    // }
  })
  
  
  app.put("/product/:id" , async (req,resp)=>{
    let result = await Product.updateOne(
      {_id: req.params.id},
      {
        $set : req.body
      }
    )
    resp.send(result)
  })
  
  
  
  app.get("/search/:key",  async (req,resp)=>{
    let result = await Product.find({
      "$or":[
        {name: {$regex: req.params.key}},
        {company: {$regex: req.params.key}},
        {category: {$regex: req.params.key}}
      ]
    })
    resp.send(result)
  })

    
  function verifytoken(req,res,next){
    let token = req.headers['authorization'];
    if(token){
      token = token.split(" ")[1];
      console.log("middleware is called if ", token[1])
      jwt.verify(token, jwtKey,(err,valid)=>{
        if(err){
          
          res.status(401).send({result : "please provide valid token"})
        }
        else{
          next();
        }
      })
    }else{
      res.status(403).send({result : "please add token with headers"})
    }
    console.log(token[1],"middileware");

  }

    const port = process.env.PORT || 1000;
    app.listen(port, ()=>{
        console.log(`server is running on ${port} `);
    });







    
    // const mongoose = require('mongoose')
    // const connectDB = async () =>{
        //     mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
        //     const productSchema = new mongoose.Schema({ });
        //     const product = new mongoose.model('product',productSchema);
        //     const data = await product.find();
        //     console.log(data);
        // }
        
        // connectDB();
        
        