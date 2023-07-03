const Mongoose = require("mongoose");
const insertData = require("../StoreinDB/insertData");

const connectDB = async () => {
  await Mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Databased Connected");
    })
    .catch((err) => console.log(err));
};
module.exports = connectDB;
