const express = require("express");
const router = express.Router();
const {SignOut, SignupAdmin, AdminSignIn } = require("../Controllers/auth.controller");
const isAuth = require("../middlewares/isAuth");


router.post("/signup",SignupAdmin);
router.post("/signin",AdminSignIn);
router.get("/signout",isAuth,SignOut);
module.exports = router;