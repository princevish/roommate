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

