const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const fs = require("fs");
const mail=require('../config/mail')
const mailtemp=require('../middleware/tempmail');



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
          expires: new Date(Date.now() + 86400000)
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
        message: "User E-mail Not Available",
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
        msg: "Logout",
      });
    } else {
      res.status(404).json({
        error: "Cookie Not Found",
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

module.exports.forget_password = async (req, res) => {

  try{
     const { email} = req.body;
   const finduser = await User.findOne({
      email,
    }).select("+password");
   if (!finduser) {
      return res.status(404).json({
        message: "E-mail Not Found",
      });
    } 
const secret=process.env.FORGET_CODE + finduser.password;
const payload={
  email:finduser.email,
  id:finduser._id
}
const token =jwt.sign(payload,secret,{expiresIn:'15m'})
const link= `${req.hostname}/forget-password/${finduser._id}/${token}`
var mailOptions = {
  from: 'no-reply@roommate.com',
  to: finduser.email,
  subject: 'Forget Password of RoomMate User',
  html: mailtemp.tempmail(link)
};
await mail.sendmail(mailOptions);
 res.status(200).json({
    message: "Password Reset Link Send to Your E-mail",
  });
}catch(e){
   return res.status(403).json({
        message: e,
      });
}
};



module.exports.check_link = async (req, res) => {

try{

    const {id ,token}=req.params;
    const finduser = await User.findOne({_id:id}).select("+password");
    if (!finduser) {
      return res.status(404).json({
        message: "Invalid Id found ",
      });
    } 
const secret=process.env.FORGET_CODE + finduser.password;
const payload=jwt.verify(token,secret);
 return res.status(200).json({
        message: "Link verifed",
      });
}catch(e){
   return res.status(403).json({
        message: e,
      });
}
};

module.exports.set_password = async (req, res) => {

try{
const {password,password2}=req.body

if(password===password2){
    const {id ,token}=req.params;
    const finduser = await User.findById({_id:id}).select("+password");
    if (!finduser) {
      return res.status(404).json({
        message: "Invalid Id found ",
      });
    } 

const secret=process.env.FORGET_CODE + finduser.password;
const payload=jwt.verify(token,secret);
const pass = await bcrypt.hash(password, 12);
finduser.password=pass;
await finduser.save();
return res.status(200).json({
        message: "Password Create Successfull..",
      });
}
else{
  return res.status(403).json({
        message: "Password Not Match",
      });
}
}catch(e){
   return res.status(403).json({
        message: e,
      });
}
};

