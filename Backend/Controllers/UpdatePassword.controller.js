// /controllers/UpdatePassword.js or similar
const bcrypt = require('bcrypt');
const Admin = require('../models/admin.model');
const Teacher = require('../models/teacher.model');
const Student = require('../models/student.model');

const models = {
  admin: Admin,
  teacher: Teacher,
  student: Student,
};

const UpdatePassword = async (req, res) => {
  const { role } = req.params;
  const { userId, currentPassword, newPassword } = req.body;

  const Model = models[role.toLowerCase()];
  if (!Model) return res.status(400).json({ error: 'Invalid role' });

  try {
    const user = await Model.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Incorrect current password' });

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    await user.save();
    return res.json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error('Password update error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = UpdatePassword;
