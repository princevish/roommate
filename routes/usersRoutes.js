const express = require("express");
const router = express.Router();
const controler = require("../controler/users");
const validation = require("../middleware/validations");
const auth = require("../config/auth");
const uploadprofile = require("../middleware/uploadimg");
const User = require("../models/usersModel");
router.post("/signin", validation.loginValidator(), controler.userSign);
router.post(
  "/signup",
  uploadprofile.single("image"),
  validation.imagevalid,
  validation.registerValidator(),
  controler.userSignup
);
router.get("/list", auth, controler.list);
router.get("/fav", auth, controler.Fav);
router.get("/logout", controler.logOut);
module.exports = router;
