// controllers/roleController.js
const Role = require('../models/Role.model');

// Add new role
exports.createRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;

    if (!name || !Array.isArray(permissions)) {
      return res.status(400).json({ message: 'Role name and permissions are required.' });
    }

    const existing = await Role.findOne({ name });
    if (existing) {
      return res.status(409).json({ message: 'Role name already exists.' });
    }

    const newRole = new Role({ name, permissions });
    await newRole.save();

    res.status(201).json({ message: 'Role created successfully.', role: newRole });
  } catch (err) {
    console.error('Create role error:', err);
    res.status(500).json({ message: 'Server error while creating role.' });
  }
};

// Get all roles
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(201).json({role:roles});
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch roles.' });
  }
};
