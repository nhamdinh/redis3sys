const express = require("express");
const redis = require("redis");
const NRP = require("node-redis-pubsub");
const config = {
  port: 6379,
  scope: "order",
};

const nrp = new NRP(config);
const app = express();
// const client = redis.createClient();

// const publish = client.duplicate();
// (async () => {
//   await publish.connect();
// })();

app.get("/order", async (req, res) => {
  const orders = [
    {
      id: "1",
      quantity: 50000,
    },
    {
      id: "2",
      quantity: 70000,
    },
  ];
  nrp.emit("ordsystem", JSON.stringify(orders));

  res.json({
    status: 200,
    message: "thanh cong",
  });
});

app.listen(3000, () => {
  `server order is running port 3000`;
});
