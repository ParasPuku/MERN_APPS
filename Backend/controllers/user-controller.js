const User = require("../models/user");
const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log("Error", error);
  }

  if (!users) {
    return res.status(404).json({ message: "No record found" });
  }
  return res.status(200).json({ users });
};

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
    if (!existingUser) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs: [],
      });
      await user.save();
      return res.status(201).json({message: 'Signup successfully!', user });
    }
  } catch (error) {
    console.log("Error", error);
  }
  return res.status(400).json({ message: "User already exists" });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    console.log("Error", error);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "Couldn't find user by this email" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  return res.status(200).json({ message: "Login Successfully!", user: existingUser });
};

const logout = async (req, res, next) => {
  try {
    req.user.tokens.splice(0, 1);
    await req.user.save();
    return res.status(200).json({ message: "Logout Successfully!" });
  } catch (error) {
    console.log("Error", error);
  }
};

const profile = async (req, res, next) => {};

module.exports = { getAllUsers, signup, login };
