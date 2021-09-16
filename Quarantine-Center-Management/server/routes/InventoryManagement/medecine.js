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
router.route("/update/:id").put(async(req,res)=>{
        let id=req.params.id;
       
        const{category,name,price_of_one,Batch}=req.body;
        const updateitem={
            category,
            name,
            price_of_one,
            Batch
        }
    
        const update=await meds.findByIdAndUpdate(id,{ $set: { Batch: Batch } }).then(()=>{
            res.status(200).send({status:"Meds updated"})
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with updating data",error:err.message});
        })
    
    })


// update only the big med item
router.route("/update/big/:id").put(async(req,res)=>{
    let id=req.params.id;
       
    const{category,name,price_of_one,Batch}=req.body;
    const updateitem={
        category,
        name,
        price_of_one,
        Batch
    }
    
    const update=await meds.findByIdAndUpdate(id,updateitem).then(()=>{
        res.status(200).send({status:"Meds updated"})
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

module.exports=router;