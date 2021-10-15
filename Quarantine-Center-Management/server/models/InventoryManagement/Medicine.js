const mongoose=require('mongoose');
const schema=mongoose.Schema;

const Medschema=new schema({
 
    category:{type:String,required: true,},
    name:{type:String,required: true,},
    price_of_one:{type:Number,required: true,},

    Batch:[{
    batchnum:{type:Number,required: true,},
    received_date:{type:Date,required: true,},
    expiration_date:{type:Date,required: true,},
    total_quantity:{type:Number,required: true,},
    }]
});



const meds = mongoose.model("Meds",Medschema);
module.exports=meds;
