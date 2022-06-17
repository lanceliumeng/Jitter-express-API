const { getAllMessages } = require("../utils/messages-utils.js");

const getMessages = (req, res) => {
  getAllMessages().exec((err, messages) => {
    if (err) {
      res.statue(500);
      return res.json({ error: err.message });
    } else {
      res.status(200);
      res.send(messages);
    }
  });
};

module.exports = { getMessages };
