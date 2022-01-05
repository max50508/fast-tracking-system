// "use strict";

const line = require("@line/bot-sdk");
const express = require("express");
const cors = require("cors");
const handleEvent = require("./hook/handleEvent");
// const config = {
//   channelSecret: "ca0a88f28f769db51317e61f6de6d992",
//   channelAccessToken:
//     "aVpaT4NEYoIsZp/fxi0ZopHSUue/ZxUAxFnIX9GQIp0P8rgyzXwElLrevLLaHmX5pOx2Ene2s2XNkzO9QfH5yttQJDRiUavKhf39SVbCUWyCqRXu8k1TvYBf/HqAaLItPWd9HLtKA/0qAH+eavXAnQdB04t89/1O/w1cDnyilFU=",
// };

// create Express app
// about Express itself: https://expressjs.com/
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/callback", (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

app.get("/", (req, res) => {
  res.status(200).send("hello_word!!");
});
// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
