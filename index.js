require("dotenv").config();

const express = require("express");

const cors = require("cors");
const { checkDBConnection, syncModels } = require("./database");
const defineRelations = require("./database/relations");
const router = require("./api/routes");

const startDB = async () => {
  await checkDBConnection();
  await defineRelations();
  syncModels();
};

const app = express();
app.use(express.json());

app.use("/api", router); // http://localhost:3000/api/

app.use(
  cors({
    origin: "http://localhost:5173", // origin allowed
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Express started, listening on port ${process.env.PORT}`);
  startDB();
});
