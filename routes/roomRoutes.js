const express = require("express");
const router = express.Router();
const controler = require("../controler/rooms");
const validation = require("../middleware/validations");
const uploadroom = require("../middleware/roomimage");
const auth = require("../config/auth");
router.get("/:id", controler.getRoom);
router.get("/fav/:id", auth, controler.roomfav);
router.get("/roomview/:id", controler.roomview);
router.get("/delete/:id", auth,controler.roomdelete);
router.get("/room/:state", controler.state);
router.get("/room/:state/:city", controler.city);
router.post(
  "/addroom",
  auth,
  uploadroom.array("images", 5),
  validation.validroomimage,
  validation.roomValidator(),
  controler.addRoom
);

module.exports = router;
