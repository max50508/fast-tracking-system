// return replyText(event.replyToken, `Joined ${event.source.type}`);

const client = require("../config/client");

const handleFollow = async (event, replyToken) => {
  const userProfile = {};
  await client
    .getProfile(event.source.userId)
    .then(async (profile) => {
      console.log(profile);
      Object.assign(userProfile, profile);
      console.log("123", userProfile);
    })
    .catch((err) => {
      // error handling
      console.log(err);
    });
  return await client.replyMessage(replyToken, {
    type: "text", // ①
    text: `您好! ${userProfile?.displayName} \n 歡迎加入疫大師共同防疫的行列!`,
  });
};

module.exports = handleFollow;
