const express = require("express");
//const  isVerifeidUser  = require("../middlewares/VerifyUser");
const getCurrentUser = require("../Controllers/user.controller");
const isAuth = require("../middlewares/isAuth");
const AddLeave = require("../Controllers/Leave.controller");
const UpdatePassword = require("../Controllers/UpdatePassword.controller");
//const UpdatePassword = require("../Controllers/UpdatePassword.Controller");
const router = express.Router();
//const UpdatePassword = require('../controllers/UpdatePassword');
router.get("/home",isAuth,getCurrentUser);
// PUT /api/:role/update-password
router.put('/:role/update-password',isAuth,UpdatePassword);

module.exports = router;
