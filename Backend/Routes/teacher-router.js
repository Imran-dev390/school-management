const express = require("express");
const createAnnouncment = require("../Controllers/announcement.controller");
const isAuth = require("../middlewares/isAuth");
//const { markAttendance } = require("../Controllers/attendance.controller");
const MarkStudentAttendance = require("../Controllers/attendance.controller");
const router = express.Router();


router.post("/Add/Announcement",isAuth,createAnnouncment);
router.post("/Mark/Attendance",isAuth,MarkStudentAttendance);

module.exports = router;