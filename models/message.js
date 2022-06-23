const mongoose = require("mongoose");
// const normalize = require("normalize-mongoose");

const Message = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  posted: {
    type: Date,
    required: true,
  },
});
// Message.plugin(normalize);
module.exports = mongoose.model("Message", Message);
