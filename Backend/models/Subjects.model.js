const mongoose = require('mongoose');

// Define the schema for the Subject model
const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
   // unique: true, // Ensure subject names are unique
  },
  code: {
    type: String,
    required: true,
 //   unique: true, // A unique code for each subject (e.g., "MATH101", "ENG102")
  },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'class', // Reference to the Class model (class levels that the subject is taught to)
    },
  ],
  department: {
    type: String, // (e.g., "Mathematics", "English", "Science")
    required: true,
  },
 /* semester: {
    type: String, // (e.g., "Fall", "Spring", "Summer")
    required: true,
  },
  credits: {
    type: Number, // Number of credits assigned to the subject
    required: true,
  },
  description: {
    type: String, // Description about the subject
    required: false,
  },*/
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create a model from the schema
const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
