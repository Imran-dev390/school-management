const expess = require("express");
const { AddStudent, AddTeacher, AddClass, AddSubjects, AddSession, AddStaff, AddTimeTable, LeaveAprroval } = require("../Controllers/auth.controller");
const isAuth = require("../middlewares/isAuth");
const {getAdminProfile,DeleteStudent, UpdateStudent, UpdateTeacher, DeleteTeacher, ExamTimetable, AssignTeacherSubject} = require("../Controllers/admin.controller");
const getCurrentUser = require("../Controllers/user.controller");
const upload = require('../middlewares/upload') // multer middleware
const mern = "mern";
const router =  expess.Router();

router.get("/",isAuth, getAdminProfile);
router.post("/Add/subjects",isAuth,AddSubjects);

// Route to add staff with image upload and auth
router.post('/Add/staff', isAuth, upload.single('profileImage'), AddStaff);
router.post("/Add/timetable",isAuth,AddTimeTable);
router.post("/Add/session",isAuth,AddSession);
router.put("/student/:id",isAuth,upload.fields([
  { name: "profileImage", maxCount: 1 },
  { name: "CnicFrontImage", maxCount: 1 },
  { name: "CnicBackImage", maxCount: 1 }
]),UpdateStudent);
router.put("/teacher/:id",isAuth,upload.fields([
  { name: "profileImage", maxCount: 1 },
  { name: "CnicFrontImage", maxCount: 1 },
  { name: "CnicBackImage", maxCount: 1 }
]),UpdateTeacher);
router.delete("/teacher/:id",isAuth,DeleteTeacher);
router.delete('/students/:id',isAuth,DeleteStudent);
//router.post("/Add/Student",isAuth,AddStudent);
router.post("/Add/Student",isAuth,upload.fields([{ name: 'profileImage', maxCount: 1 },
    { name: 'CnicFrontImage', maxCount: 1 },
    { name: 'CnicBackImage', maxCount: 1 },
    { name: 'bformImage', maxCount: 1 },
  ]),
  AddStudent
);
router.patch('/leaves/:id',isAuth,LeaveAprroval);
router.patch('/teachers/:teacherId/assign-subject',isAuth,AssignTeacherSubject);
router.post("/Add/ExamSchedule",isAuth,ExamTimetable);
router.post("/Add/Teacher",isAuth,upload.fields([
  { name: 'profileImage', maxCount: 1 },
  { name: 'CnicFrontImage', maxCount: 1 },
  { name: 'CnicBackImage', maxCount: 1 }]),AddTeacher);
router.post("/Add/Class",isAuth,AddClass);
module.exports = router;












































































































































module.exports = router;