const multer = require("multer");
const path = require("path");

const uploadprofile = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./upload/profile");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
      );
    },
  }),
});

module.exports = uploadprofile;
