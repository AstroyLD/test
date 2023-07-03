const mqtt = require("mqtt");
require("dotenv").config();
const insertData = require("../StoreinDB/insertData");

const TOPIC = process.env.NEXT_PUBLIC_MQTT_TOPIC;
const REPLYTOPIC = process.env.NEXT_PUBLIC_MQTT_TOPIC_REPLY;

const Connect = (val) => {
  let { host, port } = val;
  host = `ws://${host}:${port}/mqtt`;
  const client = mqtt.connect(host, {
    clientId: `mqttjs_ + ${Math.random().toString(16)}`,
  });

  client.on("connect", () => {
    console.log("Mqtt Connected");
    client.subscribe(TOPIC);
    client.subscribe(REPLYTOPIC);
  });

  client.on("message", (topic, message) => {
    // console.log("Received message!");
    console.log("Received message:", topic, message.toString());
    const data = JSON.parse(message.toString());
    // Call a function to insert data
    insertData(data);
  });

  client.on("error", (err) => {
    console.error("Connection error: ", err);
    client.end();
  });

  client.on("reconnect", () => {
    console.log("Reconnecting");
  });
};
module.exports = Connect;
