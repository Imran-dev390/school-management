const express = require("express");
const isAuth = require("../middlewares/isAuth");
const AddLeave = require("../Controllers/Leave.controller");
const { getStudentAttendancePercentage } = require("../Controllers/attendancePercent.controller");
const { uploadPaymentScreenshot } = require("../Controllers/Student.Controller");
const upload = require('../middlewares/upload'); // multer middleware
const router = express.Router();
router.post("/Add/Leave",isAuth,AddLeave);
// router.get('/percentage/:studentId', isAuth,getStudentAttendancePercentage);
router.get('/percentage', isAuth, getStudentAttendancePercentage);
router.post('/upload-payment-proof',isAuth,upload.single('screenshot'), uploadPaymentScreenshot);
module.exports  = router;