const express = require("express");
const route = express.Router();
const { workoutController } = require("../controllers");


route.post("/add",workoutController.addworkout);
route.get("/get", workoutController.getworkout);
route.put("/update/:id", workoutController.updateworkout);
route.delete("/delete/:id", workoutController.deleteworkout);

module.exports = route;