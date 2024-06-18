const router = require("express").Router();
const {
  getAllCompany,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/company.controller");

const {
  checkAuth,
  checkUser
} = require('../middlewares')

router.get("/", checkAuth, checkUser, getAllCompany);
router.get("/:id", checkAuth, checkUser, getOneCompany);
router.post("/", checkAuth, checkUser, createCompany);
router.put("/:id", checkAuth, checkUser, updateCompany);
router.delete("/:id", checkAuth, checkUser, deleteCompany);

module.exports = router;