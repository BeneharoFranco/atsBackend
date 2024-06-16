const router = require("express").Router()


const jobOpeningRouter = require("./job_opening.router")
const applicationRouter = require("./application.router")
const userRouter = require('./user.router')
const assign =  require('./assignment.route')

router.use('/jobOpening', jobOpeningRouter)
router.use('/application', applicationRouter)
router.use('/user', userRouter)
router.use('/assign', assign)

module.exports = router