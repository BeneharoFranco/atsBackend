const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;


/* {
  "first_name": "Chicho",
  "last_name": "Terremoto",
  "email": "trespuntoscolega@gmail.com",
  "phone": 600700800,
  "password": "blanquitas",
  "valid": true
} */