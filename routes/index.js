const express = require("express");
const route = express.Router();
const userRoute = require("./user.route");
const workoutRoute =require("./workout.route")
const goalRoute=require("./goal.route")
route.use("/user", userRoute);
route.use("/workout",workoutRoute);
route.use("/goal",goalRoute)

module.exports = route;