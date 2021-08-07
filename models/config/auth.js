const jwt = require("jsonwebtoken");
const User = require("../models/usersModel");

const auth = async (req, res, next) => {
  try {
    const usercookie = req.cookies.key;

    if (!usercookie) {
      return res.status(401).send({ msg: "token invalid" });
    }
    const token = jwt.verify(usercookie, process.env.SECRET_CODE);
    const userfind = await User.findById({ _id: token.id });
    if (!userfind) {
      throw new Error("user not found");
    }
    req.userID = token.id;
    req.userEmail = token.email;
    next();
  } catch (err) {
    return res.status(401).send({ msg: "token invalid" });
  }
};
module.exports = auth;
