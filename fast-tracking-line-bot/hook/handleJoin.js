// return replyText(event.replyToken, `Joined ${event.source.type}`);

const client = require("../config/client");

const handleJoin = async (event, replyToken) => {
  return await client.replyMessage(replyToken, {
    type: "text", // ①
    text: `Joined ${event.source.type}`,
  });
};

module.exports = handleJoin;
