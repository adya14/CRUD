const mongoose = require("mongoose");

const DB = "mongodb+srv://adyatwr:xya%40080371@cluster0.xkrphpw.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection strart")).catch((error)=> console.log(error.message));