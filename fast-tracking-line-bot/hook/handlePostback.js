const client = require("../config/client");
// const checkMessage = require("../util/message.js");
// const firebaseStoreDB = require("../util/fbDb.js");
// const residentRef = firebaseStoreDB.collection("residents");
// const residentData = {};
const handlePostback = async (event, replyToken) => {
  console.log(8, event.postback.data);
  // if (data === 'DATE' || data === 'TIME' || data === 'DATETIME') {
  //   data += `(${JSON.stringify(event.postback.params)})`;
  // }
};

module.exports = handlePostback;
