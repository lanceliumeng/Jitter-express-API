const {
  getMessages,
  getMessage,
  createMessage,
  removeMessage,
  updateMessage,
} = require("../controllers/messages-controller.js");
const express = require("express");
const router = express.Router();

//http://localhost:3001
router.get("/messages", getMessages);
router.get("/messages/:id", getMessage);
router.post("/messages", createMessage);
router.delete("/messages/:id", removeMessage);
router.put("/messages/:id", updateMessage);
// router.patch("/messages/:id", updateMessage);

module.exports = router;
