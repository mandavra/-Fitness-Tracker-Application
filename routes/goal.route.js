const express = require("express");
const route = express.Router();
const { goalController } = require("../controllers");


route.post("/add",goalController.addgoal);
route.get("/get", goalController.getgoal);
route.put("/update/:id", goalController.updategoal);
route.delete("/delete/:id", goalController.deletegoal);

module.exports = route;