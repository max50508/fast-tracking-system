// return replyText(event.replyToken, `Joined ${event.source.type}`);
// init test
const client = require("../config/client");
const firebaseStoreDB = require("../util/fbDb.js");
const handleFollow = async (event, replyToken) => {
  const userProfile = {};
  const createTime = new Date();
  const residentData = {
    userId: event.source.userId,
    privacy: false,
    displayName: "",
    pictureUrl: "",
    create_time: createTime.toISOString(),
  };
  const residentRef = firebaseStoreDB.collection("residents");
  await client
    .getProfile(event.source.userId)
    .then(async (profile) => {
      console.log(profile);
      Object.assign(userProfile, profile);
      residentData.displayName = userProfile?.displayName;
      residentData.pictureUrl = userProfile?.pictureUrl;
      console.log("123", userProfile);
      console.log("index", 23 + userProfile?.displayName.length);
    })
    .catch((err) => {
      // error handling
      console.log(err);
    });
  residentRef
    .where("userId", "==", event.source.userId)
    .get()
    .then((res) => {
      if (res.empty == true) {
        firebaseStoreDB
          .collection("residents")
          .doc(residentData.userId)
          .set(residentData);
      }
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
      quickReply: {
        // ②
        items: [
          {
            type: "action",
            action: {
              type: "message",
              label: "你好啊!",
              text: "你好啊!",
            },
          },
        ],
      },
    },
  ]);
};

module.exports = handleFollow;
