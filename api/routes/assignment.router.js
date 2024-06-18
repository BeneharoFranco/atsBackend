  const router = require("express").Router();

const {
  getAllAssignments,
  getOneAssignment,
  createAssignment,
  updateAssignment,
  deleteAssignment
} = require("../controllers/assignment.controller");

const {
  checkAuth,
  checkUser
} = require('../middlewares')

router.get("/", checkAuth, checkUser, getAllAssignments);
router.get("/:id", checkAuth, checkUser, getOneAssignment);
router.post("/", checkAuth, checkUser, createAssignment);
router.put("/:id", checkAuth, checkUser, updateAssignment);
router.delete("/:id", checkAuth, checkUser, deleteAssignment);

module.exports = router;