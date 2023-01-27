const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.Promise = global.Promise;
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    })
    .then(
      () => {
        console.log("Database is connected");
      },
      (err) => {
        console.log("Can not connect to the database" + err);
      }
    );
};

module.exports = connectDB;
