const router = require("express").Router()

const jobOpeningRouter = require("./job_opening.router")
const applicationRouter = require("./application.router")

router.use('/jobOpening', jobOpeningRouter)
router.use('/application', applicationRouter)

module.exports = router