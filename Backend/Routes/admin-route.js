const expess = require("express");
const { AddStudent, AddTeacher, AddClass, AddSubjects, AddSession, AddStaff, AddTimeTable, LeaveAprroval, getAvailableTeachers } = require("../Controllers/auth.controller");
const isAuth = require("../middlewares/isAuth");
const {getAdminProfile,DeleteStudent, UpdateStudent, UpdateTeacher, DeleteTeacher, ExamTimetable, AssignTeacherSubject, AdmissionNoRollNoSequance} = require("../Controllers/admin.controller");
const getCurrentUser = require("../Controllers/user.controller");
const upload = require('../middlewares/upload'); // multer middleware
const PromoteStudents = require("../Controllers/PromoteStudents.controller");
const transferStudent = require("../Controllers/TransferStudent.Controller");
const createTransferRecord = require("../Controllers/TransferStudent.Controller");
const AddLeave = require("../Controllers/Leave.controller");
const addFeeType = require("../Controllers/AddFeeType.controller");
const ShowGeneratedPdf = require("../Controllers/ShowPdfVoucher");
const mern = "mern";
const router =  expess.Router();

router.get("/",isAuth, getAdminProfile);
router.post("/Add/subjects",isAuth,AddSubjects);
router.post("/Add/Leave",isAuth,AddLeave);
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
router.post("/promote/students",isAuth,PromoteStudents);
router.post('/student/transfer',isAuth,createTransferRecord);
router.post("/Add/Class",isAuth,AddClass);
router.post("/add/fee-types", isAuth,addFeeType);
router.get("/students/next-numbers",isAuth,AdmissionNoRollNoSequance);
// GET /api/voucher/:id/pdf
router.get("/voucher/:id/pdf",isAuth,ShowGeneratedPdf);
router.get('/available-teachers',isAuth, getAvailableTeachers);


module.exports = router;








































































































