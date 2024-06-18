const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send("Token not found");
  }

  jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET,
    async (err, result) => {
      if (err) {
        return res.send("Token not valid");
      }

      const user = await User.findOne({
        where: {
          email: result.email,
        },
      });

      if (!user) {
        return res.send("user not found");
      }

      res.locals.user = user;
      next();
    }
  );
};

const checkUser = (req, res, next) => {
  if (res.locals.user.role !== "admin" && res.locals.user.role !== "recruiter") {
    return res.send("User not Authorized");
  }
  next();
};

const checkAdmin = (req, res, next) => {
  if (res.locals.user.role !== "admin") {
    return res.send("User not Authorized");
  }
  next();
};

const checkRecruiter = (req, res, next) => {
  if (res.locals.user.role !== "recruiter") {
    return res.send("User not Authorized");
  }
  next();
};

module.exports = {
  checkUser,
  checkAuth,
  checkAdmin,
  checkRecruiter
};
