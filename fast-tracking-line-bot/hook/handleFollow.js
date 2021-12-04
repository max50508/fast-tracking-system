// return replyText(event.replyToken, `Joined ${event.source.type}`);

const client = require("../config/client");

const handleFollow = async (event, replyToken) => {
  client
    .getProfile(event.source.userId)
    .then((profile) => {
      console.log(profile.displayName); //顯示使用者名字
      console.log(profile.userId);
      console.log(profile.pictureUrl); // 顯示使用者大頭照網址
      console.log(profile.statusMessage); // 使用者自介內容
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
