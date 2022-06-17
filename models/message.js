const mongoose = require("mongoose");

const Message = mongoose.Schema({
  test: {
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

module.exports = mongoose.model("Message", Message);
