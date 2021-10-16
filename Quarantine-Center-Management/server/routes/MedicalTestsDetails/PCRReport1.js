const router = require("express").Router();





const PCRTest = require("../../models/MedicalTestsDetails/PCRTest");













//Geting the count of attendance 

router.route("/Test/:date/:lastday").get((req, res) => {

    let date = req.params.date;

    let lastday = req.params.lastday;

    PCRTest.aggregate([{

        $match: {
            $and: [{
                "TestDate": {

                    $gte: (date), $lte: (lastday)

                }
            }]

        }
    }

        , {
        $group: {

            _id: { Result: "$Result" },


            total: { $sum: 1 }

        }

    }]).then((PCRTest) => {

        res.status(200).send(PCRTest)

    }).catch((err) => {

        console.log(err)

    })

})



module.exports = router;