const mongodb = require("../connection/db");
const valve = require("../models/valve");

exports.insertValve = async (req, res) => {
  try {
    const data = await req.body;
    console.log(data);
    valve.create(data);
    res.send("OK");
  } catch (error) {
    console.log(error);
  }
};

exports.valve = async (req, res) => {
  try {
    const data = await req.body;

    await valve.findOneAndUpdate(
      { node_name: data.node_name, valve_name: data.valve_name },
      { valve_percent: data.valve_percent, valve_status: data.valve_status },
      { new: true },
      (error, data) => {
        if (error) {
          console.log(error);
        } else {
          console.log(data);
        }
      }
    );
    console.log("Data Inserted");
  } catch (error) {
    console.log("Error updating data in database" + error);
  }
};

exports.valvelist = async (req, res) => {
  try {
    const data = await valve.find();
    res.status(200).json({ status: true, data: data });
  } catch (error) {
    console.log("Error fetching data from database" + error);
  }
};

exports.specific = async (req, res) => {
  try {
    const data = await req.body;
    let response = await valve.find({
      node_name: data.node_name,
      valve_name: data.valve_name,
    });
    res.status(200).json({ data: response[0] });
  } catch (error) {
    console.log("Error fetching data from database" + error);
  }
};
