// middlewares/checkPermission.js
const Role = require('../models/Role.model');

const checkPermission = (permission) => {
  return async (req, res, next) => {
    try {
      const user = req.user; // assumed set via auth middleware

      if (!user || !user.role) {
        return res.status(401).json({ message: "Unauthorized - No role found" });
      }

      const roleDoc = await Role.findOne({ name: user.role }); // e.g., "Teacher"

      if (!roleDoc) {
        return res.status(404).json({ message: "Role not found in permissions model" });
      }

      if (!roleDoc.permissions.includes(permission)) {
        return res.status(403).json({ message: "Permission denied" });
      }

      next();
    } catch (err) {
      res.status(500).json({ message: "Permission middleware error", error: err.message });
    }
  };
};

module.exports = checkPermission;
