const client = require("../config/client");
const { type } = require("../config/fbSA");
// const checkMessage = require("../util/message.js");
const firebaseStoreDB = require("../util/fbDb.js");
const residentRef = firebaseStoreDB.collection("residents");
const handlePostback = async (event, replyToken, source) => {
  console.log(8, typeof event.postback.data);
  if (event.postback.data === true) {
    console.log("123123123");
    return residentRef
      .doc(source.userId)
      .update({
        privacy: true,
      })
      .then((res) => {
        console.log(10, res);
      })
      .catch((err) => {
        console.log(11, err);
      });
  }
};

module.exports = handlePostback;
