const router=require("express").Router();
const { response } = require("express");
const batch=require("../../models/InventoryManagement/batch");


//use this to enter new items to database
router.route("/add").post((req,res)=>{

    const category=req.body.category;
    const name=req.body.name;
    const price_of_one=Number(req.body.price_of_one);
    const Batch=req.body.Batch;

    const newmed=new batch({
        category,
        name,
        price_of_one,
        Batch
    })
///newwwwww
    // batch.findOne({
    //     name:req.body.name
    // }).then (inventory=>{if(inventory){
    //     errors.name="name already exist";
    //     alert("name already exit");
    //     return res.status(400).json(errors);
        

    // }else {
        
    // newmed.save().then(()=>{
    //     res.json("Stock added")
    // }).catch((err)=>{
    //     console.log(err);
    // })
    // }

    // })

///newwwwwwww
    newmed.save().then(()=>{
        res.json("Stock added")
    }).catch((err)=>{
        console.log(err);
    })
});

router.route("/get").get(async(req,res)=>{
    try {
        const allStocks = await batch.find();
        console.log(allStocks);
        res.status(200).json(allStocks);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
});



//update stock small array only
router.route("/update/:ba").put(async(req,res)=>{
    let ba=req.params.ba;
    

    const{total_quantity}=req.body;
    // const updateitem={
    //     category,
    //     name,
    //     price_of_one,
    //     Batch
    // }

    const update=await batch.update({"Batch._id":ba},{$set:{"Batch.$.total_quantity":total_quantity}}).then(()=>{
        res.status(200).send({status:"Stocks updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })

})


// update only the big stock item
router.route("/update/big/:id").put(async(req,res)=>{
    let id=req.params.id;
       
    const{category,name,price_of_one}=req.body;
    // const updateitem={
    //     category,
    //     name,
    //     price_of_one,
    //     Batch
    // }
    
    const update=await batch.findByIdAndUpdate(id,{$set:{"category":category,"name":name,"price_of_one":price_of_one}}).then(()=>{
        res.status(200).send({status:"Food item updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
    
})



//get one whole item
router.route("/get/:id").get(async(req,res)=>{
    let id = req.params.id;
  
    const med = batch.findById(id).exec((err, post) => {
      if (err) {
        console.log(err);
      } else {
        res.send(post);
      }
    });
});


//Delete whole foods
router.route("/delete/:id").delete(async(req,res)=>{
    let  id=req.params.id;
    
        await batch.findByIdAndDelete(id).then(()=>{
            res.status(200).send({status:"Food item Deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete foods",error:err.message});
        })
        
})


//delete specific med array item
router.route("/delete/:id/:batch").put(async(req,res)=>{
    let id=req.params.id;
    let betchnum=req.params.batch;

        await batch.findByIdAndUpdate(id,{ $pull: { Batch: {batchnum:betchnum} } }).then(()=>{
            res.status(200).send({status:"Food batch Deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete food batch",error:err.message});
        })
        
})


//Add new food batch
router.route("/update/addnew/:id").put(async(req,res)=>{
    let id=req.params.id;
    

    const{batchnum,received_date,expiration_date,total_quantity}=req.body;
    const updateitem={
        batchnum,
        received_date,
        expiration_date,
        total_quantity
    }

    const update=await batch.findByIdAndUpdate(id,{$push:{Batch:updateitem}}).then(()=>{
        res.status(200).send({status:"Food Batch added succesfully"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })

})


module.exports=router;