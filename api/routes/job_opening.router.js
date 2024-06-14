const router = require("express").Router();

const { 
    getAllJobOpening,
    getOneJobOpening,
    createJobOpening,
    updateJobOpening,
    deleteJobOpening
} = require("../controllers/job_opening.controller");

router.get("/", getAllJobOpening);
router.get("/:id", getOneJobOpening);
router.post("/", createJobOpening);
router.put('/:id', updateJobOpening)
router.delete('/:id', deleteJobOpening)

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