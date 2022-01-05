const client = require("../config/client");
// const checkMessage = require("../util/message.js");
// const firebaseStoreDB = require("../util/fbDb.js");
// const residentRef = firebaseStoreDB.collection("residents");
// const residentData = {};
const handlePostback = async (event, replyToken) => {
  let data = querystring.parse(event.postback.data);
  console.log(8, data);
  // if (data === 'DATE' || data === 'TIME' || data === 'DATETIME') {
  //   data += `(${JSON.stringify(event.postback.params)})`;
  // }
};

module.exports = handlePostback;
