const mongoose=require('mongoose');
const schema=mongoose.Schema;



const Stockschema=new schema({
    itemcode:{type:Number},
    name:{type:String},
    price_of_one:{type:Number},
    category:{type:String},

});

/*
const Ingredientschema=new schema({
    stock:{type:[Stockschema]},
});

const Medicineschema=new schema({
    stock:{type:[Stockschema]},
    usage:{type:String},
});
*/


const stock = mongoose.model("Stock",Stockschema);
module.exports=stock;
