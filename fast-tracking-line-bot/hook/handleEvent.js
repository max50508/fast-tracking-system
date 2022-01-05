const handleText = require("../hook/handleText");
// const handleLocation = require("../hook/handleLocation");
const handleBeacon = require("../hook/handleBeacon");
const handleFollow = require("./handleFollow");
// const handleImage = require("../hook/handleImage");
const handleEvent = async (event) => {
  switch (event.type) {
    case "message":
      const message = event.message;
      switch (message.type) {
        case "text":
          return await handleText(message, event.replyToken, event.source);
      }
    case "beacon":
      return await handleBeacon(event, event.replyToken);
    case "postback":
      handlePostback(event, event.replyToken);
    case "follow":
      return await handleFollow(event, event.replyToken);
    case "unfollow":
      return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`);
    // case "postback":
    //   let data = event.postback.data;
    //   if (data === "DATE" || data === "TIME" || data === "DATETIME") {
    //     data += `(${JSON.stringify(event.postback.params)})`;
    //   }
    //   return replyText(event.replyToken, `Got postback: ${data}`);
    // case "image":
    //   return handleImage(message, event.replyToken);
    // case "location":
    //   console.log(
    //     "loactionloactionloactionloactionloactionloactionloaction"
    //   );
    //   return handleLocation(message, event.replyToken);
    // // default:
    // //   throw new Error(`Unknown message: ${JSON.stringify(message)}`);

    default:
      console.log("error!!!!");
      throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  }
};

module.exports = handleEvent;
