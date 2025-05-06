const express = require("express");
const router = express.Router();
const {SignOut, SignupAdmin, AdminSignIn } = require("../Controllers/auth.controller");


router.post("/signup",SignupAdmin);
router.post("/signin",AdminSignIn);
router.get("/signout",SignOut);




module.exports = router;