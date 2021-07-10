const { check } = require("express-validator");
const fs = require("fs");
module.exports.registerValidator = () => {
  return [
    check("email").notEmpty().withMessage("email is required"),
    check("email").isEmail().withMessage("email is not valid"),
    check("name").notEmpty().withMessage("Name is required"),

    check("password").notEmpty().withMessage("password is required"),
    check("mobile").notEmpty().withMessage("mobile no. is required"),
  ];
};
module.exports.loginValidator = () => {
  return [
    check("email").notEmpty().withMessage("email is required"),
    check("email").isEmail().withMessage("email is not valid"),
    check("password").notEmpty().withMessage("password is required"),
  ];
};
module.exports.roomValidator = () => {
  return [
    check("name").notEmpty().withMessage("name is required"),
    check("price").notEmpty().withMessage("price is required"),
  ];
};
const error = [];

module.exports.imagevalid = (req, res, next) => {
  if (typeof req.file == "undefined" || typeof req.body == "undefined") {
    return res.status(400).json({ error: "file not to find file" });
  }

  if (!req.file.filename) {
    return res.status(400).json({ error: "image field required" });
  }
  if (
    req.file.mimetype == "image/png" ||
    req.file.mimetype == "image/jpg" ||
    req.file.mimetype == "image/jpeg"
  ) {
    //
    if (req.file.size > 1024 * 1024 * 6) {
      fs.unlinkSync(`upload/profile/${req.file.filename}`);
      return res.status(400).json({ error: "file to large 3mb" });
    }
  } else {
    fs.unlinkSync(`upload/profile/${req.file.filename}`);
    return res.status(400).json({ error: "file not supported" });
  }
  next();
};

module.exports.validroomimage = (req, res, next) => {
  if (typeof req.files == "undefined" || typeof req.body == "undefined") {
    return res.status(400).json({ error: "photo not proble to send file" });
  }

  if (req.files.length <= 0) {
    return res.status(400).json({ error: "`You must select at least 1 file." });
  }

  const error = [];
  const photo = [];
  const countimage = req.files;

  countimage.map((img) => {
    if (
      img.mimetype == "image/png" ||
      img.mimetype == "image/jpg" ||
      img.mimetype == "image/jpeg"
    ) {
      //
      if (img.size > 1024 * 1024 * 6) {
        fs.unlinkSync(`upload/room/${img.filename}`);
        error.push({ error: "img to large 3mb", status: 401 });
      }
      photo.push({ img: `upload/room/${img.filename}` });
    } else {
      fs.unlinkSync(`upload/room/${img.filename}`);
      error.push({ error: "img to not support", status: 401 });
    }
  });

  if (error.length != 0) {
    if (photo.length != 0) {
      photo.map((item) => { 
        fs.unlinkSync(item.img);
      });
      return res.status(400).json(error);
    }
  }
  next();
};
