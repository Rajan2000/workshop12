const express = require("express");
const app=express();
const parser=require("body-parser")
app.use(parser.json());
let UserData=require("./schema");
const queryString=require("querystring");

require("./conn");
app.post("/insert",(req,res)=>{
    const{name,email}=req.body;
    const user=UserData({name,email})
    user.save();

    res.status(200).json({message:"data inserted"});
})
app.get("/users",async(req,res)=>{
 try{
     
     var {skip, limit,selectionKey,searchKey,searchValues}= req.query;     
     
 if(!skip){
     skip=1;
 }
 if(!limit){
     limit=10;
 }

 const page =parseInt(limit);
 const size=(skip)*limit;

 const users=await UserData.find({[searchKey[0]]: {$regex:searchValues},[searchKey[1]]: {$regex:searchValues}},{_id:1,name:1}).limit(page).skip(size);

res.status(200).json(users);
 }catch(e){
     console.log(e);
 }
});


app.listen(2000,()=>{
    console.log("Run on port 2000");
});