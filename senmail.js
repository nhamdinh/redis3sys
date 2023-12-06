const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient();

const subscriber = client.duplicate();
(async () => {
  await subscriber.connect();

  await subscriber.subscribe("ordsystem", ( message) => {
    console.log(JSON.parse(message)); // 'message'
  });
  // await subscriber.psubscribe("o*", ( message) => {
  //   console.log(JSON.parse(message)); // 'message'
  // });
})();
app.listen(3002, () => {
  `server sendmail is running port 3002`;
});
