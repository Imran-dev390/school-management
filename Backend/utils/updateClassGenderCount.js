// utils/updateClassGenderCount.js
const Class = require("../models/class.model");

const Student = require("../models/student.model");
const updateClassGenderCount = async (classId) => {
    try{
    const maleCount = await Student.countDocuments({ Classs: classId, gender: 'Male' });

    const femaleCount = await Student.countDocuments({ Classs: classId, gender: 'Female' });

    await Class.findByIdAndUpdate(classId, {
      numMaleStudents: maleCount,
      numFemaleStudents: femaleCount
    });
} catch(err){
    console.log("error on updateClassGenderCount on utills");
    return res.json({message:"Error on updateClassGenderCount Utills"})
}
  };

  module.exports = updateClassGenderCount;