const mongoose = require('mongoose')

 mongoose.connect('mongodb+srv://Member_1:IMLLDUKg6ReJniIi@cluster0.4vex8.mongodb.net/QMC_DB?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},
err => {
    if(!err){
        console.log("connection success!")
    }else{
        console.log("connection fail!" + JSON.stringify(err, undefined , 2))
    }
})