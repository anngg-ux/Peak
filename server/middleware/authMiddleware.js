const jwt = require("jsonwebtoken");
const User = require("../models/User");

const checkLogin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return next({
        code: 404,
        message: "Token not found",
      });
    }

    const actualToken = token.split(" ")[1];

    if (!actualToken) {
      return next({
        code: 404,
        message: "Token not found",
      });
    }

    const decoded = jwt.verify(
      actualToken,
      process.env.TOKEN_SECRET
    );

    const userExists = await User.findOne({
      email: decoded.email,
    });

    if (!userExists) {
      return next({
        code: 401,
        message: "Invalid request",
      });
    }

    req.user = {
      id: userExists._id.toString(),
      email: userExists.email,
      role: userExists.role,
    };

    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = (req, res, next) => {
  const user = req.user;

  if (!user || user.role !== "ADMIN") {
    return res.status(403).json({
      message: "Access denied",
    });
  }

  next();
};

module.exports = {
  checkLogin,
  isAdmin,
};