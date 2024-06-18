const router = require("express").Router()


const jobOpeningRouter = require("./job_opening.router")
const applicationRouter = require("./application.router")
const companyRouter = require("./company.router")
const userRouter = require('./user.router')
const assignRouter = require('./assignment.router')
const candidateRouter = require('./candidate.router')

router.use('/jobOpening', jobOpeningRouter)
router.use('/application', applicationRouter)
router.use('./company', companyRouter)
router.use('/user', userRouter)
router.use('/assign', assignRouter)
router.use('/candidate', candidateRouter)

module.exports = router