const User = require("../models/users");
const bcrypt = require("bcryptjs");
const passport = require("passport");

//Create a new User
module.exports.createUser = async (req, res) => {
  const { email, name, password } = req.body;
  User.findOne({ email: email }, async (err, user) => {
    if (err) res.send(err);
    if (user) res.send("User already exists");
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        email: email,
        name: name,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("created a user");
    }
  });
};

//Get a user
module.exports.getUser = async (req, res) => {
  res.send(req.user)
}

//Login a User
module.exports.loginUser =  async (req, res) => {
  console.log(req.session)
  const {email} = req.body;
  const user = await User.findOne({email: email})
  res.send(user)
};

//Logout a user
module.exports.logoutUser = (req, res) => {
  req.logout();
  res.send("LoggedOut")
}
