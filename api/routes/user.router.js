const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const {
  checkAuth,
  checkAdmin
} = require('../middlewares')

router.get("/", checkAuth, checkAdmin, getAllUsers);
router.get("/:id", checkAuth, checkAdmin, getOneUser);
router.post("/", checkAuth, checkAdmin,  createUser);
router.put("/:id", checkAuth, checkAdmin, updateUser);
router.delete("/:id", checkAuth, checkAdmin, deleteUser);

module.exports = router;

// Body
// Admin
/*
{
  "first_name": "admin",
  "last_name": "admin",
  "role": "admin",
  "email": "admin@admin.com",
  "phone": 123123123,
  "password": "admin",
  "valid": true
}
*/

/* {
  "first_name": "Chicho",
  "last_name": "Terremoto",
  "email": "trespuntoscolega@gmail.com",
  "phone": 600700800,
  "password": "blanquitas",
  "valid": true
} */
