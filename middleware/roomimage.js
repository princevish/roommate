const multer = require("multer");
const path = require("path");

const uploadroom = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./upload/room");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
      );
    },
  }),
});

module.exports = uploadroom;
