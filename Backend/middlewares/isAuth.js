const User = require('../models/student.model');
const Jwt = require("jsonwebtoken");
const isAuth = async (req, res, next) => {
const { token } = req.cookies;
//console.log("token",token,"Cookie",req.cookies);
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  try {
   // const existemail = await db.teachers.find({ email: "amir@gmail.com" })
   //console.log(existemail)
    const decoded = Jwt.verify(token, process.env.JWT_KEY);
 //   console.log("Decoded token:", decoded);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid token payload" });
    }
     req.userId = decoded.id; // contains id and email
    next();
  } catch (err) {
   // console.error("JWT verification error:", err.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports =  isAuth;