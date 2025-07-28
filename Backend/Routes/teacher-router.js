const express = require("express");
const createAnnouncment = require("../Controllers/announcement.controller");
const isAuth = require("../middlewares/isAuth");
const classes = require("../models/class.model");
//const { markAttendance } = require("../Controllers/attendance.controller");
const MarkStudentAttendance = require("../Controllers/attendance.controller");
const { AddSubjects } = require("../Controllers/auth.controller");
const router = express.Router();


router.post("/Add/Announcement",isAuth,createAnnouncment);
router.post("/Add/subjects",isAuth,AddSubjects);
router.get("/classes",isAuth,async (req,res)=>{
 try{
     const Classes = await classes.find();
     res.status(201).json({class:Classes});
 } catch(err){
    console.log("erron fetching classes");
    res.status(400).json({message:"Error Fetching Classes in teacher backend route"})
 }
})
router.post("/Mark/Attendance",isAuth,MarkStudentAttendance);

module.exports = router;