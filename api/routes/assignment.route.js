  const router = require("express").Router();

const {
  getAllAssignments,
  getOneAssignment,
  createAssignment,
  updateAssignment,
  deleteAssignment
} = require("../controllers/assignment.controller");

router.get("/user", getAllAssignments);
router.get("/user:id", getOneAssignment);
router.post("/user", createAssignment);
router.put("/user:id", updateAssignment);
router.delete("/user:id", deleteAssignment);

module.exports = router;