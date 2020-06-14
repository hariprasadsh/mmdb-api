const mongoose = require("mongoose");

const LanguageSchema = mongoose.Schema(
  {
    name: String,
    tag: String,
    desc: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Language", LanguageSchema);
