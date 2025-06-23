const multer = require('multer');

const storage = multer.memoryStorage();

//const upload = multer({ storage });
const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB per file
  },
});
module.exports = upload;
