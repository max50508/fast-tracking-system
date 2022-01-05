const client = require("../config/client");
const checkMessage = require("../util/message.js");
const firebaseStoreDB = require("../util/fbDb.js");
const residentRef = firebaseStoreDB.collection("residents");
const handleText = async (message, replyToken, source) => {
  switch (message.text) {
    case "你好啊!":
      return await client.replyMessage(replyToken, checkMessage);
    default:
      console.log(10, source);
      residentRef
        .doc(source.userId)
        .where("userId", "==", source.userId)
        .get()
        .then((res) => {
          console.log(14, res.data());
        });
  }
};

module.exports = handleText;
