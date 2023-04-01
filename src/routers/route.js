const express = require('express');
const router = new express.Router();
const MensRanking = require("../models/mens");

// create the data
router.post("/mens", async (req,res)=>{
    try {
       const addRecords = new MensRanking(req.body)
       const insertData = await addRecords.save(); 
       res.status(201).send(insertData);
    } catch (err) {
       res.status(400).send(err)
    }
});
// get the data
router.get("/mens", async (req,res)=>{
    try {
       const getDatas = await MensRanking.find().sort({rank:1});
       res.send(getDatas);
    } catch (err) {
       res.status(400).send(err)
    }
});
// get the data of individual
router.get("/mens/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
       const getData = await MensRanking.findById(_id);
       res.send(getData);
    } catch (err) {
       res.status(400).send(err)
    }
});
// update the data 
router.patch("/mens/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
       const updatData = await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
       res.send(updatData);
    } catch (err) {
       res.status(500).send(err)
    }
});
// delete the data 
router.delete("/mens/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
       const deletedData = await MensRanking.findByIdAndDelete(_id);
       res.send(deletedData);
    } catch (err) {
       res.status(500).send(err)
    }
});
module.exports = router;