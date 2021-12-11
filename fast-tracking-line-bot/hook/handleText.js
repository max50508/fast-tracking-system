const client = require("../config/client");

const handleText = async (message, replyToken, source) => {
  switch (message.text) {
    case "你好啊!":
      return await client.replyMessage(replyToken, {
        type: "template",
        altText: "疫大師相關注意事項同意書",
        template: {
          type: "bubble",
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "為了提供個人化的服務，我會 紀錄你告訴我的個人資訊，請 詳細閱讀以上聲明，同意後我 就能夠為你進行各項服務！",
                weight: "regular",
                size: "lg",
                gravity: "top",
                wrap: true,
                contents: [],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            flex: 0,
            spacing: "sm",
            contents: [
              {
                type: "button",
                action: {
                  type: "uri",
                  label: "閱讀疫大師注意事項及個人資訊保護法相關事",
                  uri: "https://linecorp.com",
                },
                height: "sm",
                style: "link",
              },
            ],
          },
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
