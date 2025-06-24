// utils/checkEmailUnique.js

const Student = require("../models/student.model");
const Teacher = require("../models/teacher.model");
const Admin = require("../models/admin.model");
const Staff = require("../models/addStaff.model");

const isEmailTaken = async (email) => {
  email = email.trim().toLowerCase();

  const [student, teacher, admin, staff] = await Promise.all([
    Student.findOne({ email }),
    Teacher.findOne({ email }),
    Admin.findOne({ email }),
    Staff.findOne({ email }),
  ]);
  return !!(student || teacher || admin || staff); // true if found in any role
};

module.exports = isEmailTaken;
