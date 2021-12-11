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
      text: `$ 你好! ${userProfile?.displayName}, 我是疫大師!\n歡迎你成為我的好友~ `,
      emojis: [
        {
          index: 0,
          productId: "5ac1bfd5040ab15980c9b435",
          emojiId: "038",
        },
      ],
    },
    {
      type: "text", // ①
      text: `當你需要疫情相關資訊時，我們都可以提供給你~`,
    },
    {
      type: "image",
      originalContentUrl:
        "https://firebasestorage.googleapis.com/v0/b/yatspic/o/YatsLogo.jpg?alt=media&token=167de9ee-dbce-4ccd-86fd-8b3ca9d81142",
      previewImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/yatspic/o/YatsLogo.jpg?alt=media&token=167de9ee-dbce-4ccd-86fd-8b3ca9d81142",
    },
  ]);
};

module.exports = handleFollow;
