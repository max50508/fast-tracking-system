const client = require("../config/client");
// const checkMessage = require("../util/message.js");
const firebaseStoreDB = require("../util/fbDb.js");
const residentRef = firebaseStoreDB.collection("residents");
// const residentData = {};
const handlePostback = async (event, replyToken) => {
  console.log(8, event.postback.data, replyToken);
  if (devent.postback.data === true) {
    // data += `(${JSON.stringify(event.postback.params)})`;
    console.log("nide");
  }
};

module.exports = handlePostback;
