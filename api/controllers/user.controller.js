const Assignment = require("../models/assignment.model");
const User = require("../models/user.model");

// GETTING ALL USERS FROM DB
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({
      result: users,
    });
  } catch (error) {
    res.json("This error: " + error);
  }
};

//GETTING SPECIFIC USER FROM DB
const getOneUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    res.status(200).json({
      result: user,
    });
  } catch (error) {
    res.json("This error: " + error);
  }
};

// CREATING A NEW USER
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      result: user,
    });
  } catch (error) {
    res.json("This error: " + error);
  }
};

//UPDATING SPECIFIC USER
async function updateUser(req, res) {
  try {
    const user = await User.update(req.body, {
      where: { id: req.params.id },
    });
    if (user) {
      return res.status(200).json({message:"user Updated", user: user});
    } else {
      return res.status(404).send("user not found");
    }
  } catch (error) {
    res.json("This error: " + error);
  }
}

//DELETING SPECIFIC USER FROM DB
async function deleteUser(req, res) {
  try {
    const user = await User.destroy({
      where: { id: req.params.id  },
    });
    if (user) {
      return res.status(200).json("user deleted");
    } else {
      return res.status(404).send("user not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
