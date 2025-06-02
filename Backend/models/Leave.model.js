const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
    leave:{
        type:String,
        minLength:10,
        required:true,
    } ,
    date:{
        type:Date,
        default:Date.now,
    },
    student:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
    }],
    Class:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"class"
    }],
     teacher:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher",
    }],
}, {
  timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model("Leave", LeaveSchema);
