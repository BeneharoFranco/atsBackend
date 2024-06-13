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
