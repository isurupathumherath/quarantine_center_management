const express = require('express');

const Profiles = require('../../models/UserManagement/uprofile');

const Profile = require('../../models/UserManagement/uprofile');

const router = express.Router();

//Create profile
router.post('/profile/create', (req, res) => {

    let newProfile = new Profiles(req.body);

    newProfile.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Profile Created successfully"
        });
    });
});

//get profile

router.get('/profiles', (req, res) => {
    Profiles.find().exec((err, profiles) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingProfile: profiles
        });
    });
});

//update posts

router.put('/profile/update/:id', (req, res) => {
    Profiles.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, profile) => {
            if (err) {
                return res.status(400).json({ error: err });
            }

            return res.status(200).json({
                success: "updated Succesfully"
            });
        }
    );
});

//delete post

router.delete('/profile/delete/:id', (req, res) => {
    Profiles.findByIdAndRemove(req.params.id).exec((err, deletedProfile) => {
        if (err) return res.status(400).json({
            message: "Delete unsuccesful", err
        });

        return res.json({
            message: "Delete Succesfull", deletedProfile
        });
    });
});

//get a specific post

router.get('/profile/:id', (req, res) => {

    Profile.findById(req.params.id, (err, profile) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }
        return res.status(200).json({
            success: true,
            profile
        });
    });
});  

//login
router.post('/login', async(req,res)=>{
    const {email, password} = req.body;
    try {
        const user = await Profiles.findOne({email: email, password: password})
        if (user){
            const temp = {
                fName: user.fName,
                mName: user.mName,
                lName: user.lName,
                uName: user.uName,
                email: user.email,
                dob: user.dob,
                nic: user.nic,
                address: user.address,
                type: user.type,
                password: user.password,
                Favourites: user.Favourites,
                resetPasswordLink: user.resetPasswordLink,
                isAdmin: user.isAdmin,
                _id: user._id
            }
            res.send(temp);
            console.log(temp);
        }else{
            return res.status(400).json({message:'Login Failed'});
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({error});
    }
});

module.exports = router;