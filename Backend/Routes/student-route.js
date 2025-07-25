const express = require("express");
const isAuth = require("../middlewares/isAuth");
const AddLeave = require("../Controllers/Leave.controller");
const { getStudentAttendancePercentage } = require("../Controllers/attendancePercent.controller");
const { uploadPaymentScreenshot } = require("../Controllers/Student.Controller");
const upload = require('../middlewares/upload'); // multer middleware
const router = express.Router();
const events = require("../models/events.model");
const Teacher = require("../models/teacher.model")
router.post("/Add/Leave",isAuth,AddLeave);
// router.get('/percentage/:studentId', isAuth,getStudentAttendancePercentage);
router.get('/percentage', isAuth, getStudentAttendancePercentage);
router.get("/teachers",isAuth, async (req, res) => {
  try {
    const teachers = await Teacher.find({}, "_id name");
    res.json({ teachers });
  } catch (error) {
    console.error("Error fetching teachers for students:", error);
    res.status(500).json({ message: "Failed to fetch teachers" });
  }
});
router.get("/events",isAuth,async(req,res)=>{
  try{
          const Events = await events.find();
          return res.status(201).json({message:"Events Received",
            Event:Events})
  } catch(err){
    console.log("error fetchingt events");
    res.status(500).json({message:"Failed to fetch events"})
  }
})
router.post('/upload-payment-proof',isAuth,upload.single('screenshot'), uploadPaymentScreenshot);
module.exports  = router;