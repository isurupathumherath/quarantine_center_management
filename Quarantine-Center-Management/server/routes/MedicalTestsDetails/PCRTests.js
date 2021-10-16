const router = require("express").Router();
let PCRTest = require("../../models/MedicalTestsDetails/PCRTest");

//Insert
router.route("/add").post((req,res)=>{

    const PatientId = Number(req.body.PatientId);
    const PCRTestId = req.body.PCRTestId;
    const TestNo    = Number(req.body.TestNo);
    const TestDate  = req.body.TestDate;
    const TestTime  = req.body.TestTime;
    const Result    = req.body.Result;

    const newPCRTest = new PCRTest({
          PatientId,
          PCRTestId,
          TestNo,
          TestDate,
          TestTime,
          Result
    })

    newPCRTest.save().then(()=>{
        res.json("PCR Test Details Added")//if the saving is successful then method is called and this reponse is given to the frontend in the json format
    }).catch((err)=>{
       console.log(err);//from this ,if there is an error this detets what it is(catch the error) and the error is displayed in the termina})
       res.status(500).send({status: "Error with entering details"});
    })

})


//Display
//http://localhost:8070/PCRTest/Display
//calling above backend url from get http request with execute the below route.when it is called body of the route is getting executed
router.route("/display").get((req,res)=>{

     PCRTest.find().then((pcrtest)=>{
         res.json(pcrtest)
     }).catch((err)=>{
         console.log(err)
     })     
})



//Update
router.route("/update/:id").put(async (req,res)=>{
    let testid = req.params.id;
    const{PatientId,PCRTestId,TestNo,TestDate,TestTime,Result} = req.body;
    
    const updatePCRTest = {
        PatientId,
        PCRTestId,
        TestNo,
        TestDate,
        TestTime,
        Result
    }

    const updatedtest = await PCRTest.findByIdAndUpdate(testid,updatePCRTest).then(()=>{
        res.status(200).send({status: "PCR Test Details Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating details",error: err.message});
    })
    
    
})



//search
router.route("/display/:id").get(async (req,res) =>{
    let testid = req.params.id;
    const searchedtest=await PCRTest.findById(testid)
    .then((PCRTest) =>{
        res.status(200).send({status: "PCR Test Details Fetched",test: PCRTest});   
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error in Searching PCR Test Details",error: err.message});
    })
    

})

//PCR Test grouping by results
router.route("/PCRReport/:date/:lastday").get((req,res)=>{

    let delivered_date = req.params.date;

    let lastday = req.params.lastday;

    PCRTest.aggregate([{

        $match:{$and:[{"TestDate":{

            $gte:(delivered_date), $lte:(lastday)

        } },]

    }}

       

        ,{$group:{

        _id : { Result :"$Result"},
        

     

       

      total : {$sum : 1 }

     

    }

   

    }]).then((PCRTest)=>{

        res.status(200).send(PCRTest)

    }).catch((err)=>{

        console.log(err)

    })

})

//PCR Test grouping by Result and Test Number

router.route("/PCRReport/group2/:date/:lastday").get((req,res)=>{

    let delivered_date = req.params.date;

    let lastday = req.params.lastday;

    PCRTest.aggregate([{

        $match:{$and:[{"TestDate":{

            $gte:(delivered_date), $lte:(lastday)

        } },]

    }}

       

        ,{$group:{

        _id : { Result :"$Result",TestNo :"$TestNo"},

     

       

      total : {$sum : 1 }

     

    }

   

    }]).then((PCRTest)=>{

        res.status(200).send(PCRTest)

    }).catch((err)=>{

        console.log(err)

    })

})









module.exports = router;