const express = require("express");
const createAnnouncment = require("../Controllers/announcement.controller");
const isAuth = require("../middlewares/isAuth");
const classes = require("../models/class.model");
const Subject = require("../models/Subjects.model");
const Teachers = require("../models/teacher.model");
//const { markAttendance } = require("../Controllers/attendance.controller");
const MarkStudentAttendance = require("../Controllers/attendance.controller");
const { AddSubjects, AddTimeTable, getAvailableTeachers } = require("../Controllers/auth.controller");
const router = express.Router();


router.post("/Add/Announcement",isAuth,createAnnouncment);
router.get("/teachers",isAuth,async(req,res)=>{
    try{
          const teachers = await Teachers.find();
          return res.status(201).json({teachers});
    } catch(err){
        console.log("err",err.message);
        return res.status(500).json({message:"error on getting teachers"})
    }
})
router.post("/Add/subjects",isAuth,AddSubjects);
router.get("/subjects",isAuth,async(req,res)=>{
    try{
          const subject = await Subject.find();
          res.status(201).json({subjects:subject});
    } catch(err){
        console.log("error on subjects user",err);
        res.status(400).json({message:"Not Found Subjects"})
    }
})
router.post("/Add/timetable",isAuth,AddTimeTable);
router.get('/available-teachers',isAuth, getAvailableTeachers);
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