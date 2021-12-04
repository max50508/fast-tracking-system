// return replyText(event.replyToken, `Joined ${event.source.type}`);

const client = require("../config/client");

const handleFollow = async (event, replyToken) => {
  client
    .getProfile(event.source.userId)
    .then((profile) => {
      console.log(profile);
    })
    .catch((err) => {
      // error handling
      console.log(err);
    });
  return await client.replyMessage(replyToken, {
    type: "text", // ①
    text: `Follow ${event.source.type}\n${event}`,
  });
};

module.exports = handleFollow;
