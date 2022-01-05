const client = require("../config/client");

const handleText = async (message, replyToken, source) => {
  switch (message.text) {
    case "你好啊!":
      return await client.replyMessage(replyToken, {
        type: "carousel",
        contents: [
          {
            type: "bubble",
            size: "kilo",
            body: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: "為了提供個人化的服務，我會紀錄你告訴我的個人資訊，請詳細閱讀以上聲明，同意後我就能夠為你進行各項服務！",
                  weight: "regular",
                  size: "md",
                  decoration: "none",
                  align: "start",
                  wrap: true,
                  offsetTop: "none",
                  offsetStart: "xs",
                  offsetEnd: "xs",
                  offsetBottom: "none",
                },
              ],
              backgroundColor: "#F7F7F7",
              spacing: "none",
              justifyContent: "space-around",
            },
            footer: {
              type: "box",
              layout: "vertical",
              spacing: "sm",
              contents: [
                {
                  type: "button",
                  style: "link",
                  action: {
                    type: "uri",
                    label: "閱讀及管家注意事項及個資相關保護法同意協定",
                    uri: "https://linecorp.com",
                  },
                  height: "sm",
                },
              ],
              flex: 0,
            },
          },
        ],
      });

    // {
    //   "type": "bubble",
    //   "size": "kilo",
    //   "body": {
    //     "type": "box",
    //     "layout": "vertical",
    //     "contents": [
    //       {
    //         "type": "text",
    //         "text": "為了提供個人化的服務，我會紀錄你告訴我的個人資訊，請詳細閱讀以上聲明，同意後我就能夠為你進行各項服務！",
    //         "weight": "regular",
    //         "size": "md",
    //         "decoration": "none",
    //         "align": "start",
    //         "wrap": true,
    //         "offsetTop": "none",
    //         "offsetStart": "xs",
    //         "offsetEnd": "xs",
    //         "offsetBottom": "none"
    //       }
    //     ],
    //     "backgroundColor": "#F7F7F7",
    //     "spacing": "none",
    //     "justifyContent": "space-around"
    //   },
    //   "footer": {
    //     "type": "box",
    //     "layout": "vertical",
    //     "spacing": "sm",
    //     "contents": [
    //       {
    //         "type": "button",
    //         "style": "link",
    //         "action": {
    //           "type": "uri",
    //           "label": "閱讀及管家注意事項及個資相關保護法同意協定",
    //           "uri": "https://linecorp.com"
    //         },
    //         "height": "sm"
    //       }
    //     ],
    //     "flex": 0
    //   }
    // }
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
