const express = require("express");
const router = express.Router();
const users = require("../controllers/users")
const passport = require("passport")

//Route to create a user
router.route("/register").post(users.createUser);

//Route to get a user
router.route("/").get(users.getUser);

//Route to login a user
router.route("/login").post(passport.authenticate("local"), users.loginUser);

//Route to logout a user
router.route("/logout").get(users.logoutUser)

module.exports = router;


