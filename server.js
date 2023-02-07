const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const connectDB = require("./connections/DBConnect");
const AppRoutes = require("./routes");
const connectSocket = require("./connections/SocketConfig");
require("dotenv").config();

const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.use("/api", AppRoutes);

server.listen(process.env.port || 3000, () => {
  console.log(`App connected to http://localhost:${process.env.port}`);
  connectDB();
  connectSocket(io);
});
