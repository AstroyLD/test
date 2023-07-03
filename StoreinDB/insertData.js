const Flow = require("../models/flow");
const Level = require("../models/level");
const Quality = require("../models/quality");

const insertData = async (data) => {
  // Insert flow data
  const flowData = Object.keys(data)
    .filter((key) => key.startsWith("d_"))
    .map((key) => data[key]);

  try {
    for (const data of flowData) {
      const flow = new Flow(data);
      const savedFlow = await flow.save();
      console.log("Flow saved:", savedFlow);
    }
  } catch (error) {
    console.error("Error Saving Flow Data", error);
  }

  // Insert level data
  const levelData = Object.keys(data)
    .filter((key) => key.startsWith("l_") && key !== "l_n")
    .map((key) => data[key]);

  try {
    for (const data of levelData) {
      const level = new Level(data);
      const savedLevel = await level.save();
      console.log("Level saved:", savedLevel);
    }
  } catch (error) {
    console.error("Error Saving Level Data", error);
  }

  // Insert quality data
  const qualityData = Object.keys(data)
    .filter((key) => key.startsWith("Q_"))
    .map((key) => data[key]);

  try {
    for (const data of qualityData) {
      const quality = new Quality(data);
      const savedQuality = await quality.save();
      console.log("Quality saved:", savedQuality);
    }
  } catch (error) {
    console.error("Error Saving Quality Data", error);
  }
  console.log("All Data Inserted Successfully.");
};
module.exports = insertData;
