const FeeType = require("../models/FeeType.model");
const Class = require("../models/class.model");
const Admin = require("../models/admin.model");
const addFeeType = async (req, res) => {
  try {
    const {
      name,
      classIds,
      period,
      amount,
      activeOnAdmission = true,
      activeOnDashboard = false
    } = req.body;

    // Basic validations
    if (!name || !period || !amount || !Array.isArray(classIds) || classIds.length === 0) {
      return res.status(400).json({ message: "All required fields must be filled." });
    }

    // Validate classIds format
 for (let id of classIds) {
  if (typeof id !== "string" || !id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: `Invalid class ID: ${id}` });
  }
}

const admin = await Admin.findOne({_id:req.userId});
    // Create new FeeType
    if(!admin){
        return res.status(401).json({message:"Admin Not Found."})
    }
    const newFeeType = await FeeType.create({
      name,
      classIds,
      period,
      amount,
      activeOnAdmission,
      activeOnDashboard
    });
 admin.FeeTypes.push(newFeeType);
 await admin.save();
    return res.status(201).json({
      message: "Fee type created successfully",
      feeType: newFeeType
    });
  } catch (err) {
    console.error("Error creating fee type:", err.message);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message
    });
  }
};

module.exports = addFeeType;
