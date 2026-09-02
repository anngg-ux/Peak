const {
  loginService,
  registerService,
} = require("../services/authService");

const login = async (req, res, next) => {
  return loginService(req, res, next);
};

const register = async (req, res, next) => {
  return registerService(req, res, next);
};

module.exports = {
  login,
  register,
};