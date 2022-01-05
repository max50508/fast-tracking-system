const client = require("../config/client");
const checkMessage = require("../util/message.js");
const handleText = async (message, replyToken, source) => {
  switch (message.text) {
    case "你好啊!":
      return await client.replyMessage(replyToken, checkMessage);
  }
};

module.exports = handleText;
