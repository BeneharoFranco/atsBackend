const router = require("express").Router()

const jobOpeningRouter = require("./job_opening.router")

router.use('/jobOpening', jobOpeningRouter)

module.exports = router