const client = require("../config/client");
const checkMessage = require("../util/message.js");
const firebaseStoreDB = require("../util/fbDb.js");
const residentRef = firebaseStoreDB.collection("residents");
const residentData = {};
const handleText = async (message, replyToken, source) => {
  switch (message.text) {
    // case "你好啊!":
    //   return await client.replyMessage(replyToken, checkMessage);
    default:
      console.log(10, source);
      return await residentRef
        .where("userId", "==", source.userId)
        .get()
        .then((res) => {
          res.forEach((val) => {
            console.log(14, val.data());
            Object.assign(residentData, val.data());
            if (val.data().privacy === false) {
              return client.replyMessage(replyToken, checkMessage);
            } else {
              return client.replyMessage(replyToken, {
                text: `感謝您同意! 現在可立即開始使用瞜! \n 到處探險吧 ! `,
              });
            }
          });
        });
  }
};

module.exports = handleText;
