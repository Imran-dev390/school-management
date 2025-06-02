const express = require("express");
const isAuth = require("../middlewares/isAuth");
const AddLeave = require("../Controllers/Leave.controller");
const { getStudentAttendancePercentage } = require("../Controllers/attendancePercent.controller");
const router = express.Router();
router.post("/Add/Leave",isAuth,AddLeave);
// router.get('/percentage/:studentId', isAuth,getStudentAttendancePercentage);
router.get('/percentage', isAuth, getStudentAttendancePercentage);
module.exports  = router;