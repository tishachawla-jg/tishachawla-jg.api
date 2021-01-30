//localhost:3000/sqaure/?num=3
//require("dotenv").config()//env =for keeping secrets in our database,copy sectrets and expose them in javascript
const express=require('express');
const app=express();
//const mongoose=require('mongoose');
//const cors=require('cors');
//app.use(cors());
const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.post('/sqaure',function(req,res){
    const num=req.query["num"];
    const sq=num*num;
    return res.json(sq.toString());
   });
   
   
app.listen(3000);
