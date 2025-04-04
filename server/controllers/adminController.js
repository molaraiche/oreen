const Admin = require("../model/adminModel");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const CreateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({ message: "please fill all the fields with the correct Data !" });
  }
  try {
    if (!validator.isEmail(email) || !validator.isStrongPassword(password)) {
      res.status(400).json({ message: "Please add correct format !" });
    } else {
      const existUser = await Admin.findOne({ email });
      if (existUser) {
        res.json({ message: "user exist Please try another email !" });
      } else {
        const HashedPassword = bcrypt.hashSync(password, 12);
        const newUser = await Admin.create({ email, password: HashedPassword });
        const token = CreateToken(newUser._id);
        res.status(200).json({ message: "Sign up !", newUser, token: token });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please fill all the fields with correct data!" });
  }

  try {
    if (!validator.isEmail(email) || !validator.isStrongPassword(password)) {
      return res
        .status(400)
        .json({ message: "Please enter a valid email and strong password!" });
    }

    const existUser = await Admin.findOne({ email });
    if (!existUser) {
      return res
        .status(400)
        .json({ message: "User does not exist or password is incorrect!" });
    }

    const matchedPassword = bcrypt.compareSync(password, existUser.password);
    if (!matchedPassword) {
      return res
        .status(400)
        .json({ message: "User does not exist or password is incorrect!" });
    }

    const token = CreateToken(existUser._id);

    res.status(200).json({ message: "Login successful!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

module.exports = { login, signup };
