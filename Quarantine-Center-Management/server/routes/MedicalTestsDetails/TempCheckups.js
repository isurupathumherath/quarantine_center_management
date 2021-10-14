const router = require("express").Router();
let TempCheckup = require("../../models/MedicalTestsDetails/TempCheckup");


//Insert
router.route("/add").post((req,res)=>{

    const PatientId    = Number(req.body.PatientId);
    const CheckupId    = req.body.CheckupId;
    const CheckupDate  = req.body.CheckupDate;
    const CheckupTime  = req.body.CheckupTime;
    const Result       = req.body.Result;

    const newTempCheckup = new TempCheckup({
          PatientId,
          CheckupId,
          CheckupDate,
          CheckupTime,
          Result
    })

    newTempCheckup.save().then(()=>{
        res.json("Temperature Checkup Details Added")//if the saving is successful then method is called and this reponse is given to the frontend in the json format
    }).catch((err)=>{
       console.log(err);//from this ,if there is an error this detets what it is(catch the error) and the error is displayed in the termina})
       res.status(500).send({status: "Error with entering details"});
    })

})


//Display
router.route("/display").get((req,res)=>{

    TempCheckup.find().then((tempcheckup)=>{
        res.json(tempcheckup)
    }).catch((err)=>{
        console.log(err)
    })     
})


//Update
router.route("/update/:id").put(async (req,res)=>{
    let checkupid = req.params.id;
    const{PatientId,CheckupId,CheckupDate,CheckupTime,Result} = req.body;
    
    const updateTempCheckup = {
        PatientId,
        CheckupId,
        CheckupDate,
        CheckupTime,
        Result
    }

    const updatedcheckup = await TempCheckup.findByIdAndUpdate(checkupid,updateTempCheckup).then(()=>{
        res.status(200).send({status: "Body Temperature Checkup Details Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with Updating Details",error: err.message});
    })
    
    
})


//delete
router.route("/delete/:id").delete(async (req,res)=>{
    let checkupid = req.params.id;

    await TempCheckup.findByIdAndDelete(checkupid)
    .then(() =>{
        res.status(200).send({status: "Body Temperature Checkup Details Deleted"}); 
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error in Deleting Body Temperature Checkup Details",error: err.message});
    })

})


//search
router.route("/displaytemp/:id").get(async (req,res) =>{
    let checkupid = req.params.id;
    const searchedcheckup=await TempCheckup.findById(checkupid)
    .then((TempCheckup) =>{
        res.status(200).send({status: "Body Temperature Checkup Details Fetched",TempCheckup});   
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error in Searching Body Temperature Checkup Details",error: err.message});
    })

})



module.exports = router;
