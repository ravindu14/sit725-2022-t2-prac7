const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const connectDB = require("./connections/DBConnect");
const AppRoutes = require("./routes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.use("/api", AppRoutes);

app.listen(process.env.port || 3000, () => {
  console.log(`App connected to http://localhost:${process.env.port}`);
  connectDB();
});
