const client = require("../config/client");

const handleText = async (message, replyToken, source) => {
  switch (message.text) {
    case "送禮自用兩相宜":
      return await client.replyMessage(replyToken, {
        type: "text", // ①
        text: "請選擇想要的店家類別",
        quickReply: {
          // ②
          items: [
            {
              type: "action",
              action: {
                type: "message",
                label: "送禮/自用",
                text: "送禮/自用",
              },
            },
            {
              type: "action",
              action: {
                type: "uri",
                label: "周邊店家",
                uri: "https://line.me/R/nv/location/",
              },
            },
          ],
        },
      });
    case "人流資訊":
      return await client.replyMessage(replyToken, {
        type: "text", // ①
        text: "請選擇想要的店家類別",
        quickReply: {
          // ②
          items: [
            {
              type: "action",
              action: {
                type: "message",
                label: "人流資訊",
                text: "人流資訊",
              },
            },
            {
              type: "action",
              action: {
                type: "uri",
                label: "地方消息",
                uri: "https://line.me/R/nv/location/",
              },
            },
          ],
        },
      });
  }
};

module.exports = handleText;
