const client = require("../config/client");
const checkMessage = require("../util/message.js");
const firebaseStoreDB = require("../util/fbDb.js");
const residentRef = require("../util/fbDb");
const handleText = async (message, replyToken, source) => {
  switch (message.text) {
    case "你好啊!":
      return await client.replyMessage(replyToken, checkMessage);
    default:
      residentRef
        .where("userId", "==", source.userId)
        .get()
        .then((res) => {
          // if (res.empty == true) {
          //   firebaseStoreDB
          //     .collection("residents")
          //     .doc(residentData.userId)
          //     .set(residentData);
          // }
          console.log(14, res);
        });
  }
};

module.exports = handleText;
