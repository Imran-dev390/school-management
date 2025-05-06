const expess = require("express");
const { AddStudent, AddTeacher, AddClass, AddSubjects, AddSession } = require("../Controllers/auth.controller");
const isAuth = require("../middlewares/isAuth");
const {getAdminProfile,DeleteStudent, UpdateStudent, UpdateTeacher, DeleteTeacher} = require("../Controllers/admin.controller");
const getCurrentUser = require("../Controllers/user.controller");
const router =  expess.Router();

router.get("/",isAuth, getAdminProfile);
router.post("/Add/subjects",isAuth,AddSubjects);
router.post("/Add/session",isAuth,AddSession);
router.put("/student/:id",UpdateStudent);
router.put("/teacher/:id",UpdateTeacher);
router.delete("/teacher/:id",DeleteTeacher);
router.delete('/students/:id',DeleteStudent);
router.post("/Add/Student",isAuth,AddStudent);
router.post("/Add/Teacher",isAuth,AddTeacher);
router.post("/Add/Class",isAuth,AddClass);
module.exports = router;












































































































































module.exports = router;