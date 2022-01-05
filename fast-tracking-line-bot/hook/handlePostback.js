const client = require("../config/client");
// const checkMessage = require("../util/message.js");
const firebaseStoreDB = require("../util/fbDb.js");
const residentRef = firebaseStoreDB.collection("residents");
const handlePostback = async (event, replyToken, source) => {
  // console.log(8, event.postback.data, replyToken);
  if (devent.postback.data === true) {
    residentRef
      .doc(source.userId)
      .update({
        privacy: event.postback.data,
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
