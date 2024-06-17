  const router = require("express").Router();

const {
  getAllAssignments,
  getOneAssignment,
  createAssignment,
  updateAssignment,
  deleteAssignment
} = require("../controllers/assignment.controller");

router.get("/", getAllAssignments);
router.get("/:id", getOneAssignment);
router.post("/", createAssignment);
router.put("/:id", updateAssignment);
router.delete("/:id", deleteAssignment);

module.exports = router;