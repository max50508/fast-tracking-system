// return replyText(event.replyToken, `Joined ${event.source.type}`);

const client = require("../config/client");

const handleFollow = async (event, replyToken) => {
  return await client.replyMessage(replyToken, {
    type: "text", // ①
    text: `Follow ${event.source.type}`,
  });
};

module.exports = handleFollow;
