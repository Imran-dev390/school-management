// const express = require("express");
// const  authRouter =require( "./Routes/auth-route")
// const path =  require( "path");
// const configDotenv =  require( "dotenv");
// const  cors =  require( "cors" );
// const db = require("./Db/db");
// const studentRouter = require("./Routes/student-route");
// const cookieParser = require("cookie-parser");
// const app = express();
// const adminRouter = require("../Backend/Routes/admin-route");
// const userRouter = require("./Routes/user-route");
// const teacherRouter = require("./Routes/teacher-router");
// configDotenv.config();
// console.log("process jswt_key",process.env.JWT_KEY);
// // Connect to Database
// db();
// app.use(express.json());
// app.use(express.urlencoded({extended:true}))
// app.use(cookieParser());
// app.use(cors({
//     origin:"http://localhost:5173",
//     credentials:true
// }))
// app.use("/auth",authRouter);
// app.use("/admin",adminRouter);
// app.use("/user",userRouter);
// app.use("/teacher",teacherRouter);
// app.use("/student",studentRouter);
// app.listen(3000);








/*const express = require("express");
const http = require("http"); // ✅ needed for socket.io
const { Server } = require("socket.io");
const path = require("path");
const configDotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const db = require("./Db/db");
const authRouter = require("./Routes/auth-route");
const adminRouter = require("./Routes/admin-route");
const userRouter = require("./Routes/user-route");
const teacherRouter = require("./Routes/teacher-router");
const studentRouter = require("./Routes/student-route");

configDotenv.config();

const app = express();
const server = http.createServer(app); // ✅ wrap express in http server

// ✅ Initialize socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // adjust for your frontend
    credentials: true,
  },
});

// ✅ Store io globally to use in controllers
app.set("io", io);

// ✅ Connect to DB
db();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ✅ Routes
app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);

// ✅ Socket connection (optional logging)
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});*/




const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const db = require("./Db/db");
const authRouter = require("./Routes/auth-route");
const adminRouter = require("./Routes/admin-route");
const userRouter = require("./Routes/user-route");
const teacherRouter = require("./Routes/teacher-router");
const studentRouter = require("./Routes/student-route");

// Load .env variables
dotenv.config();

const app = express();
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // adjust to match your frontend check it 
    credentials: true,
  },
});

// Track connected users: Map userId -> socket.id
const userSocketMap = new Map();

// Make Socket.IO accessible in controllers
app.set("io", io);
app.set("userSocketMap", userSocketMap);

// Connect to database
db();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend origin
    credentials: true,
  })
);

// Attach io and socketMap to each request
app.use((req, res, next) => {
  req.io = io;
  req.userSocketMap = app.get("userSocketMap");
  next();
});

// Routes
app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);

// Socket.IO connection
io.on("connection", (socket) => {
  console.log("✅ Socket connected:", socket.id);

  // Listen for user registration
  socket.on("register", (userId) => {
    userSocketMap.set(userId, socket.id);
    console.log(`🟢 User registered: ${userId} -> ${socket.id}`);
  });

  // Cleanup on disconnect
  socket.on("disconnect", () => {
    for (let [userId, id] of userSocketMap.entries()) {
      if (id === socket.id) {
        userSocketMap.delete(userId);
        console.log(`🔴 User disconnected: ${userId}`);
        break;
      }
    }
    console.log("❌ Socket disconnected:", socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
