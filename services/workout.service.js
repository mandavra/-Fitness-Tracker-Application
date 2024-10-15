const { workoutSchema } = require("../model");

const addworkout = (body) => {
  return workoutSchema.create(body);
};
const getworkout = () => {
  return workoutSchema
    .find()
    .populate("userSchema");
};
const deleteworkout = (id) => {
  return workoutSchema.findByIdAndDelete(id);
};
const updateworkout = (id, body) => {
  return workoutSchema.findByIdAndUpdate(id, body);
};

module.exports = {
  addworkout,
  getworkout,
  deleteworkout,
  updateworkout,
};