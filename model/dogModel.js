const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Dogs = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    desciption: {
      type: String,
      required: false,
    },
  },
  {
    collection: "dogs",
  }
);

module.exports = mongoose.model("dogs", Dogs);
