// const anouncement = require("../models/announcements.model");
// const Class = require("../models/class.model");
// const Teacher = require("../models/teacher.model");
// const admin = require("../models/admin.model");
// const createAnnouncement = async (req,res)=>{
//   try{
// //    const teacher = await 
// const { title,message,classes,name } = req.body;
//  const teacher = await Teacher.findOne({_id:req.userId});
//  const Admin  = await admin.findOne({_id:req.userId});
//  const classe = await Class.findOne({name:classes})
// if(!teacher) {
//   console.log("teacher is not founding",teacher)
//   return res.status(404).json({message:"Teacher Not Found"})
// }
// if(!classe){
//    console.log("class is not founding",classe)
//   return res.status(404).json({message:"Class Not Found"})
// }
// const Announcement = await anouncement.create({
//   title,
//   message,
//   classes:classe._id,
//   createdByRole:teacher.role,
//   name:teacher.name,

// })
// classe.announcements.push(Announcement._id);
// await classe.save();
// teacher.announcements.push(Announcement._id);
// await teacher.save();
// res.status(200).json({message:"created Announcment"})
//   }catch(err){
//     console.log("error here announcment",err.message)
//     return res.status(402).json({message:"why it is not created announcment error!"})
//   }
// }


// module.exports = createAnnouncement;





























const anouncement = require("../models/announcements.model");
const Class = require("../models/class.model");
const Teacher = require("../models/teacher.model");
const admin = require("../models/admin.model");

const createAnnouncement = async (req, res) => {
  try {
    const { title, message, classes, name } = req.body;

    const teacher = await Teacher.findOne({ _id: req.userId });
    console.log("teach name",teacher.name);
    const Admin = await admin.findOne({ _id: req.userId });
    const classe = await Class.findOne({ name: classes });

    if (!teacher) {
      console.log("teacher is not found", teacher);
      return res.status(404).json({ message: "Teacher Not Found" });
    }

    if (!classe) {
      console.log("class is not found", classe);
      return res.status(404).json({ message: "Class Not Found" });
    }

    const Announcement = await anouncement.create({
      title,
      message,
      classes: classe._id,
      createdByRole: teacher.role,
      name: teacher.name,
    });

    classe.announcements.push(Announcement._id);
    await classe.save();

    teacher.announcements.push(Announcement._id);
    await teacher.save();

    // ✅ Emit real-time event using socket.io
    const io = req.app.get("io"); // access socket.io instance from app
    io.emit("new-announcement", {
      title,
      message,
      teacherName: teacher.name,
      timestamp: new Date().toLocaleTimeString()
    });

    res.status(200).json({ message: "Created Announcement" });
  } catch (err) {
    console.log("error here announcement", err.message);
    return res.status(402).json({ message: "Announcement creation failed!" });
  }
};

module.exports = createAnnouncement;
