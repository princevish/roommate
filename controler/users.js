const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const fs = require("fs");

module.exports.userSign = async (req, res) => {
  const messages = [];
  if (!validationResult(req).isEmpty()) {
    const errors = validationResult(req).array();
    for (const i of errors) {
      messages.push(i);
    }
    return res.status(303).json({
      message: messages,
    });
  }

  try {
    const { email, password } = req.body;
    const finduser = await User.findOne({
      email,
    }).select("+password");
    if (!finduser) {
      return res.status(404).json({
        message: "User not found ",
      });
    } else {
      const pass = await bcrypt.compare(password, finduser.password);
      if (pass) {
        const token = jwt.sign(
          {
            id: finduser._id,
            email: finduser.email,
          },
          process.env.SECRET_CODE
        );

        return res
          .status(202)
          .cookie("key", token, {
            sameSite: "strict",
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 90000000)
          })
          .json({
            id: finduser._id,
            token: token,
          });
      } else {
        return res.status(406).json({
          message: "password not match",
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.userSignup = async (req, res) => {
  try {
    /// validation check result
    const messages = [];
    if (!validationResult(req).isEmpty()) {
      // remove profile image
      fs.unlinkSync(`upload/profile/${req.file.filename}`);
      const errors = validationResult(req).array();
      for (const i of errors) {
        messages.push(i);
      }
      return res.status(400).json({
        message: messages,
      });
    }

    const { email, name, mobile, password } = req.body;
    const finduser = await User.findOne({
      email,
    });
    if (!finduser && email && name && mobile && password) {
      const pass = await bcrypt.hash(password, 12);
      const user = await User.create({
        email: email,
        name: name,
        mobile: mobile,
        password: pass,
        image: `upload/profile/${req.file.filename}`,
      });
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.SECRET_CODE
      );

      return res
        .status(201)
        .cookie("key", token, {
          sameSite: "strict",
          path: "/",
          httpOnly: true,
          expires: new Date(Date.now() + 90000000)
        })
        .json({
          user: user,
          token: token,
        });
    } else {
      if (req.file.filename) {
        // profile image remove
        fs.unlinkSync(`upload/profile/${req.file.filename}`);
      }
      return res.status(302).json({
        message: "User email not available",
      });
    }
  } catch (err) {
    return res.status(403).json({
      message: err,
    });
  }
};

module.exports.logOut = (req, res) => {
  try {
    if (req.cookies.key) {
      res.clearCookie("key");
      res.status(200).json({
        msg: "logout",
      });
    } else {
      res.status(404).json({
        error: "cookie not found",
      });
    }
  } catch (err) {
    res.status(403).json({
      error: err,
    });
  }
};
module.exports.list = async (req, res) => {
  try{  const user = await User.findOne({ _id: req.userID }).populate({
    path: "room",
    populate: "users",
  });
  res.status(200).json({
    data: user,
  });}catch(e){
    console.log(e)
  }

};
module.exports.Fav = async (req, res) => {
  try{
  const roomuser = await User.findOne({ _id: req.userID }).populate({
    path: "fav",
    populate: "users",
  });

  res.status(200).json({
    data: roomuser,
  });
}catch(e){
  console.log(e)
}
};
