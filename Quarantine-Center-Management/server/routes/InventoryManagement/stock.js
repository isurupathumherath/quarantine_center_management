const router=require("express").Router();
const { response } = require("express");
const batch=require("../../models/InventoryManagement/batch");
const stocks=require("../../models/InventoryManagement/stocks"); 


//use this to enter new items to database
router.route("/add").post((req,res)=>{

    const name=req.body.name;
    const total_quantity=Number(req.body.total_quantity);
    const category=req.body.category;
    const price_of_one=Number(req.body.price_of_one);
    const received_date=Date(req.body.received_date);
    const expiration_date=Date(req.body.expiration_date);
    const batchnum=Number(req.body.batchnum);
    const itemcode=Number(req.body.itemcode);

    const newbatch=new batch({
        itemcode,
        category,
        name,
        price_of_one,
        batchnum,
        received_date,
        expiration_date,
        total_quantity
    })

    newbatch.save().then(()=>{
        res.json("batch added")
    }).catch((err)=>{
        console.log(err);
    })
});


//delete every batch from this id
router.route("/delete/:itemcode").delete(async(req,res)=>{
    let  itemcode=req.params.itemcode;

        await batch.remove({itemcode: itemcode}).then(()=>{
            res.status(200).send({status:"batch item Deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete batch",error:err.message});
        })
    
})

//get every item from this batch
router.route("/get/:itemname").get(async(req,res)=>{
    let itemname=req.params.itemname;
   
    const stoct_item2=await batch.find({name:itemname}).then((batch)=>{
        res.status(200).send(batch)
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get batch",error:err.message});
    })
})

//get the batch
router.route("/get/:itemname/:batchnum").get(async(req,res)=>{
    let itemname=req.params.itemname;
    let batchnum=req.params.batchnum;

    const stoct_item2=await batch.find({name:itemname,batchnum:batchnum}).then((batch)=>{
        res.status(200).send(batch)
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get batch",error:err.message});
    })
})


//delete batch from item code and batch number
router.route("/delete/batch/:id").delete(async(req,res)=>{
    let  bid=req.params.id;

        await batch.findByIdAndDelete(bid).then(()=>{
            res.status(200).send({status:"batch item Deleted"})
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete batch"})
        })
    
})

//get all
router.route("/get").get(async(req,res)=>{

        batch.find({}, 'name').then((batch)=>{
                res.json(batch)
            }).catch((err)=>{
                console.log(err);
            })

        })

//update the batch
router.route("/update/:id").put(async(req,res)=>{
    let id=req.params.id;
   

    const{itemcode,category,name,price_of_one,batch_num,received_date,expiration_date,total_quantity}=req.body;

    const updateitem={
        itemcode,
        category,
        name,
        price_of_one,
        batch_num,
        received_date,
        expiration_date,
        total_quantity
    }

    const update=await batch.findByIdAndUpdate(id,updateitem).then(()=>{
        res.status(200).send({status:"batch updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })

})


module.exports=router;