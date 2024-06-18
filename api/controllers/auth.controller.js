const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.json({
        message: "Invalid credentials",
      });
    }

    const result = bcrypt.compareSync(req.body.password, user.password);

    if (!result) {
      return res.send("Invalid credentials");
    }

    const payload = { email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      message: "Login Succesful",
      result: token,
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  login,
};
