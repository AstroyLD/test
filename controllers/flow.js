const mongodb = require("../connection/db");
const flow = require("../models/flow");
const level = require("../models/level");

exports.flowid = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const data = await flow.find({
      $or: [{ flow_name: id }, { node_name: id }],
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
exports.levelid = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await level.find({
      $or: [{ level_name: id }, { node_name: id }],
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
