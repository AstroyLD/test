const express = require("express");
const { model } = require("mongoose");
const authController = require("../controllers/auth");
const flowController = require("../controllers/flow");
const logController = require("../controllers/log");
const valveController = require("../controllers/valve");
const userController = require("../controllers/user");

const router = express.Router();

router.get("/flow", authController.flow);
router.get("/level", authController.level);
router.get("/flow/:id", flowController.flowid);
router.get("/level/:id", flowController.levelid);
router.post("/log/flow/:id", logController.flowlog);
router.post("/log/level/:id", logController.levellog);
router.post("/valve", valveController.valve);
router.get("/valvelist", valveController.valvelist);
router.post("/specific", valveController.specific);
router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/insertValve", valveController.insertValve);
module.exports = router;
