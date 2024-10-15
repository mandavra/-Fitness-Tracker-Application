const { goalSchema } = require("../model");

const addgoal = (body) => {
  return goalSchema.create(body);
};
const getgoal = () => {
  return goalSchema.find().populate("userSchema");
};
const deletegoal = (id) => {
  return goalSchema.findByIdAndDelete(id);
};
const updategoal = (id, body) => {
  return goalSchema.findByIdAndUpdate(id, body);
};

module.exports = {
  addgoal,
  getgoal,
  deletegoal,
  updategoal,
};