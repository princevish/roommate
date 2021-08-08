const express = require("express");
const router = express.Router();
const controler = require("../controler/rooms");
const validation = require("../middleware/validations");
const uploadimg = require("../middleware/uploadimg");
const auth = require("../config/auth");
router.get("/:id", controler.getRoom);
router.get("/fav/:id", auth, controler.roomfav);
router.get("/roomview/:id", controler.roomview);
router.get("/delete/:id", auth,controler.roomdelete);
router.get("/review/:id",auth, controler.reviewget);
router.post("/review/:id",auth, controler.reviewview);
router.get("/room/:state", controler.state);
router.get("/room/:state/:city", controler.city);
router.get("/r/:type/:id", controler.gettype);
router.post(
  "/addroom",
  auth,
  uploadimg.array("images", 5),
  validation.roomValidator(),
  controler.addRoom
);

module.exports = router;
