const router = require("express").Router();

const {
  getAllApplication,
  getOneApplication,
  createApplication,
  updateApplication,
  deleteApplication,
} = require("../controllers/application.controller");


router.get("/", getAllApplication);
router.get("/:id", getOneApplication);
router.post("/", createApplication);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);

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
