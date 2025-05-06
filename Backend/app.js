const express = require("express");
const  authRouter =require( "./Routes/auth-route")
const path =  require( "path");
const configDotenv =  require( "dotenv");
const  cors =  require( "cors" );
const db = require("./Db/db");
const cookieParser = require("cookie-parser");
const app = express();
const adminRouter = require("../Backend/Routes/admin-route");
const userRouter = require("./Routes/user-route");
configDotenv.config();
console.log("process jswt_key",process.env.JWT_KEY);
// Connect to Database
db();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/auth",authRouter);
app.use("/admin",adminRouter);
app.use("/user",userRouter);
app.listen(3000);