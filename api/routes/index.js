const router = require("express").Router()

const jobOpeningRouter = require("./job_opening.router")
const applicationRouter = require("./application.router")
const companyRouter = require("./company.router")

router.use('/jobOpening', jobOpeningRouter)
router.use('/application', applicationRouter)
router.use('./company', companyRouter)

module.exports = router