const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }, // e.g., accountant, guard
  phone: { type: String, required: true },
  email: { type: String },
  password: { type: String },
  address:{type:String, required:true},
   profileImage:{ 
    data:Buffer,
    contentType: String,
   },
  announcements:[{
   type:mongoose.Schema.Types.ObjectId,
   ref:"Announcement",
   default:null,
     }],
  address: { type: String },
  dob: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model("Staff", staffSchema);
