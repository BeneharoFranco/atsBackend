const router = require("express").Router();

const {
  getAllApplication,
  getOneApplication,
  createApplication,
  updateApplication,
  deleteApplication,
} = require("../controllers/application.controller");

const {
  checkAuth,
  checkUser
} = require('../middlewares')

router.get("/", checkAuth, checkUser, getAllApplication);
router.get("/:id", checkAuth, checkUser, getOneApplication);
router.post("/", checkAuth, checkUser, createApplication);
router.put("/:id", checkAuth, checkUser, updateApplication);
router.delete("/:id", checkAuth, checkUser, deleteApplication);

module.exports = router;

// TODO preguntar porque la relación no genera id en la tabla
 
// Body
// {
//     "comments": "prueba2",
//     "application_date": "2024-06-13",
//     "status": "open",
//     "candidateId": 1,
//     "jobOpeningId": 2
// }
