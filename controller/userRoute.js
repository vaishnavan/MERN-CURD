const express = require("express");
const User = require('../model/userModel');
const router = express();

//Adding a data
router.post("/addUser", (req, res)=>{
    const { username, age } = req.body;
    const user = new User({
        username,
        age,
    })
    user.save()
    .then((data)=>{
        res.json(data);
    })
})

//getting a data
router.get("/allUser", (req, res) => {
    User.find()
    .then((data) =>{
        res.json(data);
    })
})

//getting single user by id
router.get("/User/:id", (req, res)=> {
    User.findById({_id:req.params.id})
    .then((data)=>{
        res.json(data);
    })
})

//updaing a user
router.post("/updateUser/:id", (req, res) => {
    const user = new User({
        _id:req.params.id,
        username:req.body.username,
        age:req.body.age
    })
    User.updateOne({_id:req.params.id}, user)
    .then(()=>{
        res.status(200).json({message:"updated successfully"})
    })
    .catch((err)=>{
        res.status(404).json({error:err});
    })
})

//deleting a user
router.delete("/deleteUser/:id", (req, res) =>{
    User.deleteOne({_id:req.params.id})
    .then(()=>{
        res.json({message:"Deleted successfully"});
    })
})

//delete all
router.delete("/deleteall", (req, res)=> {
    User.deleteMany()
    .then(()=>{
        res.status(200).json({message:"All data deleted"})
    })
})

module.exports = router;