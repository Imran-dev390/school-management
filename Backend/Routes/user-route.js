const express = require("express");
//const  isVerifeidUser  = require("../middlewares/VerifyUser");
const getCurrentUser = require("../Controllers/user.controller");
const isAuth = require("../middlewares/isAuth");
const router = express.Router();
router.get("/home",isAuth,getCurrentUser);
module.exports = router;