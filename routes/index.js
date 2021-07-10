const express = require("express");
const router = express.Router();
const auth = require("../config/auth");
//passport auth for header token verification
//const passport = require('passport');
//passport.authenticate('jwt', { session: false})

router.use("/room", require("./roomRoutes"));

router.get("/auth", auth, async (req, res, next) => {
  return res.status(200).json({
    id: req.userID,
  });
});

router.use("/users", require("./usersRoutes"));

router.use((req, res, next) => {
  res.status(404).json({ error: "url not found" });
});
module.exports = router;
