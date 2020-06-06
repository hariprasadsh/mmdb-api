const mongoose = require("mongoose");

const GenreSchema = mongoose.Schema(
  {
    name: String,
    tag: String,
    desc: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Genre", GenreSchema);
