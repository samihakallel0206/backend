const express = require("express");

const { register, login, logout } = require("../controllers/auth.controller");
const upload = require("../utils/multer");

const {registerValidation, loginValidation} = require("../middlewares/validations/authValidations");
const validate = require("../middlewares/validations/validator");
const router = express.Router();
//TEST
router.get('/test', (req, res) => {
  res.end('Bonjour')
})
// REGISTER
router.post(
  "/register",
  upload.single("profilePic"),
  registerValidation,
  validate,
  register
);

//LOGIN
router.post("/login", loginValidation, validate, login)
//LOGOUT
router.post("/logout", logout)
  
  
module.exports = router;
