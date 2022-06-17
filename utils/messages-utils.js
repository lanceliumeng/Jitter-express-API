const Message = require("../models/message.js");

const getAllMessages = () => Message.find();

module.exports = { getAllMessages };
