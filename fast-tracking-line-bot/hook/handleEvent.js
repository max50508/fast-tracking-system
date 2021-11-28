const handleText = require("../hook/handleText");
// const handleLocation = require("../hook/handleLocation");
// const handleBeacon = require("../hook/handleBeacon");
// const handleImage = require("../hook/handleImage");
const handleEvent = async (event) => {
  switch (event.type) {
    case "message":
      const message = event.message;
      switch (message.type) {
        case "text":
          return await handleText(message, event.replyToken, event.source);
        // case "image":
        //   return handleImage(message, event.replyToken);
        // case "location":
        //   console.log(
        //     "loactionloactionloactionloactionloactionloactionloaction"
        //   );
        //   return handleLocation(message, event.replyToken);
        // // default:
        // //   throw new Error(`Unknown message: ${JSON.stringify(message)}`);
      }
    // case "beacon":
    //   return await handleBeacon(event, event.replyToken);
    default:
      console.log("error!!!!");
      throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  }
};

module.exports = handleEvent;
