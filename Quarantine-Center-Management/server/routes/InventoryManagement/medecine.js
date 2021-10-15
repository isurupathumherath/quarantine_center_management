const router=require("express").Router();
const { response } = require("express"); 
const meds=require("../../models/InventoryManagement/Medicine");


//Add new Med
router.route("/add").post((req,res)=>{

    const category=req.body.category;
    const name=req.body.name;
    const price_of_one=Number(req.body.price_of_one);
    const Batch=req.body.Batch;

    
        const newmed=new meds({
            category,
            name,
            price_of_one,
            Batch
        })
     
    
        newmed.save().then(()=>{
            res.json("Med added")
        }).catch((err)=>{
            console.log(err);
        })
});

//get all med
router.route("/get").get(async(req,res)=>{
try {
    const allMeds = await meds.find();
    console.log(allMeds);
    res.status(200).json(allMeds);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});


//update med small array only
router.route("/update/:ba").put(async(req,res)=>{
        let ba=req.params.ba;
        

        const{total_quantity}=req.body;
        // const updateitem={
        //     category,
        //     name,
        //     price_of_one,
        //     Batch
        // }
    
        const update=await meds.update({"Batch._id":ba},{$set:{"Batch.$.total_quantity":total_quantity}}).then(()=>{
            res.status(200).send({status:"Meds updated"})
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with updating data",error:err.message});
        })
    
    })


// update only the big med item
router.route("/update/big/:id").put(async(req,res)=>{
    let id=req.params.id;
       
    const{category,name,price_of_one}=req.body;
    // const updateitem={
    //     category,
    //     name,
    //     price_of_one,
    //     Batch
    // }
    
    const update=await meds.findByIdAndUpdate(id,{$set:{"category":category,"name":name,"price_of_one":price_of_one}}).then(()=>{
        res.status(200).send({status:"Med item updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
    
})



//get one whole item
router.route("/get/:id").get(async(req,res)=>{
        let id = req.params.id;
      
        const med = meds.findById(id).exec((err, post) => {
          if (err) {
            console.log(err);
          } else {
            res.send(post);
          }
        });
});

//Delete whole meds
router.route("/delete/:id").delete(async(req,res)=>{
    let  id=req.params.id;
    
        await meds.findByIdAndDelete(id).then(()=>{
            res.status(200).send({status:"med item Deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete meds",error:err.message});
        })
        
})

//delete specific med array item
router.route("/delete/:id/:batch").put(async(req,res)=>{
    let id=req.params.id;
    let betchnum=req.params.batch;

        await meds.findByIdAndUpdate(id,{ $pull: { Batch: {batchnum:betchnum} } }).then(()=>{
            res.status(200).send({status:"med batch Deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete meds",error:err.message});
        })
        
})

//Add new med batch
router.route("/update/addnew/:id").put(async(req,res)=>{
    let id=req.params.id;
    

    const{batchnum,received_date,expiration_date,total_quantity}=req.body;
    const updateitem={
        batchnum,
        received_date,
        expiration_date,
        total_quantity
    }

    const update=await meds.findByIdAndUpdate(id,{$push:{Batch:updateitem}}).then(()=>{
        res.status(200).send({status:"Med Batch added succesfully"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })

})
module.exports=router;