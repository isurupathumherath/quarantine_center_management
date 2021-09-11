const mongoose=require('mongoose');
const schema=mongoose.Schema;

const Batchschema=new schema({
    itemcode:{type:Number},
    category:{type:String},
    name:{type:String},
    price_of_one:{type:Number},
    batchnum:{type:Number},
    received_date:{type:Date},
    expiration_date:{type:Date},
    total_quantity:{type:Number},
    
});



const batch = mongoose.model("Batch",Batchschema);
module.exports=batch;
