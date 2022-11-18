const User = require("../model/user.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userSignUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // check existing user
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // save user and return response
    await user.save();

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // check existing user
    let user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    // validate password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    // create and assign a token
    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.protectedRoute = async (req, res) => {
    res.status(200).json({
        message: "Welcome to protected route",
    });
};
    
exports.protectedAdminRoute = async (req, res) => {
    res.status(200).json({
        message: "Welcome to protected admin route",
    });
}