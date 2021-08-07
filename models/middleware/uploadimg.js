const multer = require("multer");
const path = require("path");

const uploadimg = multer({
  storage: multer.diskStorage({}),
  limits:{fileSize:1024 * 1024 * 6},
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb({message: "File type is not supported"}, false);
    }else{
    cb(null, true);}
  },
});

module.exports = uploadimg;