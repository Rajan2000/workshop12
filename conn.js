const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",{useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true,
useFindAndModify:false}).then(console.log("Connection successfull")).catch((e)=>{
    console.log(e);
});
module.exports=mongoose;