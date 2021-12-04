// return replyText(event.replyToken, `Joined ${event.source.type}`);

const client = require("../config/client");

const handleFollow = async (event, replyToken) => {
  client
    .getProfile(event.source.userId)
    .then((profile) => {
      console.log(profile);
      return await client.replyMessage(replyToken, {
        type: "text", // ①
        text: `您好! ${profile.displayName} \n 歡迎加入疫大師共同防疫的行列!`,
      });
    })
    .catch((err) => {
      // error handling
      console.log(err);
    });
};

module.exports = handleFollow;
