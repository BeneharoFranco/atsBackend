const router = require("express").Router();

const { 
    getAllJobOpening,
    getOneJobOpening,
    createJobOpening,
    updateJobOpening,
    deleteJobOpening
} = require("../controllers/job_opening.controller");

const {
    checkAuth,
    checkUser
  } = require('../middlewares')

router.get("/", checkAuth, checkUser, getAllJobOpening);
router.get("/:id", checkAuth, checkUser, getOneJobOpening);
router.post("/", checkAuth, checkUser, createJobOpening);
router.put('/:id', checkAuth, checkUser, updateJobOpening)
router.delete('/:id', checkAuth, checkUser, deleteJobOpening)

module.exports = router;

// Body
// {
//     "title": "prueba",
//     "description": "description",
//     "location": "location",
//     "status": "status",
//     "end_date": "2024-06-13",
//     "companyId": 1
// }