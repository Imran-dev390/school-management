const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mern = "mern stack";
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

// const allowedOrigins = [
//   'http://localhost:5173',
//   'http://localhost:3000',
//   'https://erp.meritaleempk.com',
//   'https://erp.meritaleempk.com',
//   'https://erp.meritaleempk.com',
//   'https://erp.meritaleempk.com'
// ];

// const corsOptions = {
//     origin: function (origin, callback) {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true
// };

// Initialize Socket.IO
// const io = new Server(server, {
//   cors: corsOptions,
//   pingTimeout: 60000,
//   pingInterval: 25000,
//   transports: ['websocket', 'polling'],
//   allowUpgrades: true,
//   cookie: false
// });

// updated code //
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://meritaleempk.com',
  'https://meritaleempk.com',
  'https://erp.meritaleempk.com',
  'http://erp.meritaleempk.com'
];

// ✅ CORS middleware
const corsOptions = {
  origin: function (origin, callback) {
    if (
      !origin ||
      allowedOrigins.includes(origin) ||
      origin.endsWith('.meritaleempk.com') // Allow subdomains
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:5173',
      'http://localhost:3000',
      'https://erp.meritaleempk.com',
      'http://erp.meritaleempk.com',
      'https://meritaleempk.com',
      'http://meritaleempk.com'
    ],
    credentials: true
  },
  pingTimeout: 60000,
  pingInterval: 25000,
  transports: ['websocket', 'polling'],
  allowUpgrades: true,
  cookie: false
});

// ends here //

// Track connected users: Map userId -> socket.id
const userSocketMap = new Map();

// Make Socket.IO accessible in controllers
app.set("io", io);
app.set("userSocketMap", userSocketMap);

// Connect to database
db();

// Middleware
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
// Allow larger JSON and URL-encoded bodies
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ extended: true,parameterLimit:100000,limit: '500mb' }));
app.use(cookieParser());
app.use(
  cors(corsOptions)
);

// Attach io and socketMap to each request
app.use((req, res, next) => {
  req.io = io;
  req.userSocketMap = app.get("userSocketMap");
  next();
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/student", studentRouter);


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
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
