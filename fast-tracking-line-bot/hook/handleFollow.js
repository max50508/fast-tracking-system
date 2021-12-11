// return replyText(event.replyToken, `Joined ${event.source.type}`);
// init test
const client = require("../config/client");

const handleFollow = async (event, replyToken) => {
  const userProfile = {};
  await client
    .getProfile(event.source.userId)
    .then(async (profile) => {
      console.log(profile);
      Object.assign(userProfile, profile);
      console.log("123", userProfile);
      console.log("index", 23 + userProfile?.displayName.length);
    })
    .catch((err) => {
      // error handling
      console.log(err);
    });
  return await client.replyMessage(replyToken, [
    {
      type: "text", // ①
      text: `你好! ${userProfile?.displayName}, 我是疫大師!\n歡迎你成為我的好友~ $`,
      emojis: [
        {
          index: 24 + userProfile?.displayName.length,
          productId: "5ac1bfd5040ab15980c9b435",
          emojiId: "038",
        },
      ],
    },
    {
      type: "text", // ①
      text: `當你需要疫情相關資訊時，我們都可以提供給你相關的防疫與配套措施~`,
    },
    {
      type: "image",
      originalContentUrl:
        "https://firebasestorage.googleapis.com/v0/b/fast-tracking-system.appspot.com/o/addFriend.png?alt=media&token=36375240-72db-4ffa-b10c-8a1e4daf779a",
      previewImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fast-tracking-system.appspot.com/o/addFriend.png?alt=media&token=36375240-72db-4ffa-b10c-8a1e4daf779a",
    },
    {
      type: "action",
      action: {
        type: "message",
        label: "你好啊!",
        text: "你好啊!",
      },
    },
  ]);
};

module.exports = handleFollow;
