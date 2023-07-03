require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Connect = require("./connection/mqtt");
const wmsRoutes = require("./routes/wmsRoutes");

const app = express();

//Middle Wares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//to allow Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//routes
app.use("/wms", wmsRoutes);

//Connecting to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //Connect to mqtt
    Connect({
      host: process.env.NEXT_PUBLIC_MQTT_HOST,
      port: process.env.NEXT_PUBLIC_MQTT_PORT,
    });

    //Listen to port
    app.listen(process.env.PORT, () => {
      console.log("Listening to Port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
