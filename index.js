require("dotenv").config();

const express = require("express");

const { checkDBConnection, syncModels } = require("./database");
const defineRelations = require("./database/relations");

const startDB = async () => {
  await checkDBConnection();
  await defineRelations();
  syncModels();
};

const app = express();
app.use(express.json());

// app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Express started, listening on port ${process.env.PORT}`);
  startDB();
});
