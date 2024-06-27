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

// 
const formData = require("express-form-data");
const os = require("os");
const options = {
  uploadDir: os.tmpdir(),
  autoClean: true
};
// 

app.use(
  cors({
    // origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// 
app.use(formData.parse(options));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());
// 

// http://localhost:3000/api/
app.use("/api", router); 


app.listen(process.env.PORT, () => {
  console.log(`Express started, listening on port ${process.env.PORT}`);
  startDB();
});
