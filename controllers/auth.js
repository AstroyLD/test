const mongodb = require("../connection/db");
const flow = require("../models/flow");
const level = require("../models/level");

exports.flow = async (req, res) => {
  try {
    const data = await flow.find();
    res.status(200).json({ data });
  } catch (error) {
    console.log("Error fetching data from database" + error);
  }
};

exports.level = async (req, res) => {
  try {
    const data = await level.find();
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    console.log("Error fetching data from database" + error);
  }
};
