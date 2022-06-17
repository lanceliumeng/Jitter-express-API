const { getMessages } = require("../controllers/messages-controller.js");
const express = require("express");
const router = express.Router();

//http://localhost:3001
router.get("/messages", getMessages);

module.exports = router;
