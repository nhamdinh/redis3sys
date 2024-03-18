const express = require("express");
const redis = require("redis");

const app = express();
const NRP = require("node-redis-pubsub");
const config = {
  port: 6379,
  scope: "order",
};

const nrp = new NRP(config);
nrp.on("ordsystem", (data) => {
  console.log(data);
});
app.listen(3001, () => {
  `server payment is running port 3001`;
});
