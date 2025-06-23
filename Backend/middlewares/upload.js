const multer = require('multer');

const storage = multer.memoryStorage();

//const upload = multer({ storage });
const upload = multer({
  storage,
  limits: {
    fileSize: 500 * 1024 * 1024, // 500MB per file
  },
});
module.exports = upload;
