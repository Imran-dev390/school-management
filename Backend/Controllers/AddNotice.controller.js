const Notice = require("../models/Notice.model");
const Session = require("../models/Session.model");
const AddNotice =  async (req, res) => {
  try {
    const {
      title,
      description,
      linkTo,
      url,
      isActive,
      classIds,
      sectionIds,
      studentIds,
    } = req.body;
       const today = new Date();
      const currentSession = await Session.findOne({
          startDate: { $lte: today },
          endDate: { $gte: today },
        });
    
        if (!currentSession) {
          return res.status(404).json({ message: "No active session found" });
        }
    const noticeData = {
      title,
      description,
      linkTo,
      url: linkTo === 'url' ? url : undefined,
      isActive: isActive === 'true' || isActive === true,
      classIds: classIds ? JSON.parse(classIds) : [],
      sectionIds: sectionIds ? JSON.parse(sectionIds) : [],
      studentIds: studentIds ? JSON.parse(studentIds) : [],
    };

    if (linkTo === 'attachment' && req.file) {
      noticeData.attachment = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
        filename: req.file.originalname,
      };
    }
    const savedNotice = await Notice.create(noticeData);
    currentSession.Notices.push(savedNotice._id);
    await currentSession.save();
    res.status(201).json({ message: 'Notice created', notice: savedNotice });
  } catch (err) {
    console.error('Error creating notice:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = AddNotice;