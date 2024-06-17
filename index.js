require("dotenv").config();

const express = require("express");


const { checkDBConnection, syncModels } = require("./database");
const defineRelations = require("./database/relations");
const router = require("./api/routes");

//MODELOS
const User = require("./api/models/user.model");
const Candidate = require("./api/models/candidate.model");
const Assignment = require("./api/models/assignment.model");
const Application = require("./api/models/application.model");
const Company = require("./api/models/company.model");
const JobOpening = require("./api/models/job_opening.model");


const startDB = async () => {
  await checkDBConnection();
  await defineRelations();
  syncModels();
};

const app = express();
app.use(express.json());

app.use("/api", router); // http://localhost:3000/api/

app.listen(process.env.PORT, () => {
  console.log(`Express started, listening on port ${process.env.PORT}`);
  startDB();
});
