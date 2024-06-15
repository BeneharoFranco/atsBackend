const router = require("express").Router()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const jobOpeningRouter = require("./job_opening.router")
const applicationRouter = require("./application.router")
const userRouter = require('./user.router')

router.use('/jobOpening', jobOpeningRouter)
router.use('/application', applicationRouter)
router.use('/user', userRouter)

module.exports = router