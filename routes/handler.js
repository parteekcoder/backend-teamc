const express = require('express');
const router = express.Router();
const achievement = require('../models/achievements.js');
const Alumni=require('../models/Alumni.js');
const acadmicCordinator=require('../models/AcadmicCordinator.js');
const Student = require('../models/Student.js');
const Faculty=require('../models/Faculty');
const PhdScholar=require('../models/PhdScholar');
const Staff=require('../models/Staff');
const Infrastructure = require('../models/Infrastructure.js');
const Activity = require('../models/Activity.js');
const NewsHighlight = require('../models/NewsHighlight.js');
const Placement = require('../models/Placement.js');
router.get('/Achievements', async (req, res) => {
    const achievements = await achievement.findOne({department:req.department}).exec((err, achievementData) => {
        if (err) throw err;
        if (achievementData) {
            res.end(JSON.stringify(achievementData.data));
        } else {
            res.end();
        }
    });
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

/* acadmic cordinator starts*/

router.get('/Acadcord',async (req,res)=>{
   try {
       const cordinators=await acadmicCordinator.findOne({department:req.department});
       res.status(200).json(cordinators.data);
   } catch (error) {
    console.log(error);
    res.end();
   } 
})
/* acadmic ccordinator ends */
/* Alumini starts*/
router.get('/Alumni',async(req,res)=>{
    try {
        const alumnis=await Alumni.findOne({department:req.department});
        res.status(200).json(alumnis.data);
    } catch (error) {
     console.log(error);
     res.end();
    } 
})
/* Alumini ends */


/* Student Starts */
router.get('/Students',async(req,res)=>{
    try {
        const student=await Student.findOne({department:req.department});
        res.status(200).json(student.data);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Student ends */
/*Faculty Starts*/
router.get('/Faculty',async(req,res)=>{
    try {
        const faculty=await Faculty.findOne({department:req.department});
        console.log(faculty.data) 
        res.status(200).json(faculty.data);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Faculty Ends*/
/*Faculty Starts*/
router.get('/Profile/:id',async(req,res)=>{
    try {
        const faculty=await Faculty.find();
        res.status(200).json(faculty);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Faculty Ends*/
/*PhdScholar Starts*/
router.get('/PhdScholar',async(req,res)=>{
    try {
        const phdScholars=await PhdScholar.findOne({department:req.department});
        res.status(200).json(phdScholars.data);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* PhdScholar Ends*/
/*Staff Starts*/
router.get('/Staff',async(req,res)=>{
    try {
        const staff=await Staff.findOne({department:req.department});
        res.status(200).json(staff.data);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Staff Ends*/
/*Infrastructure Starts*/
router.get('/Infrastructure',async(req,res)=>{
    try {
        const infrastructures=await Infrastructure.findOne({department:req.department});
        res.status(200).json(infrastructures.data);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Infrastructure Ends*/
/*Activity Starts*/
router.get('/Activity',async(req,res)=>{
    try {
        const activies=await Activity.findOne({department:req.department});
        console.log(activies)
        res.status(200).json(activies.data);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Activity Ends*/
/*News Highlights Starts*/
router.get('/News',async(req,res)=>{
    try {
        const newsHigh=await NewsHighlight.findOne({department:req.department});
        res.status(200).json(newsHigh.data);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* News Highlights Ends*/
/*Placements Starts*/
router.get('/placements',async(req,res)=>{
    try {
        const placement=await Placement.findOne({department:req.department}).limit(req.query.limit);
        
        res.status(200).json(placement.data);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Placements Ends*/
module.exports = router;