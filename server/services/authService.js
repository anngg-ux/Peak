const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const loginService = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return next({
        code: 400,
        message: "User not found",
      });
    }

    const matchPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!matchPassword) {
      return next({
        code: 400,
        message: "Incorrect password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

const registerService = async (req, res, next) => {
  try {
    const { name, email, password, address } = req.body;

    const userAlreadyExists = await User.exists({ email });

    if (userAlreadyExists) {
      return next({
        code: 400,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const role =
      email === "admin@gmail.com" ? "ADMIN" : "USER";

    await User.create({
      name,
      email,
      password: hashedPassword,
      address,
      role,
    });

    res.status(201).json({
      message: "Registration successful",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginService,
  registerService,
};