const router = require("express").Router();
const {
  getAllCompany,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/company.controller");

router.get("/", getAllCompany);
router.get("/:id", getOneCompany);
router.post("/", createCompany);
router.put("/:id", updateCompany);
router.delete("/:id", deleteCompany);

module.exports = router;