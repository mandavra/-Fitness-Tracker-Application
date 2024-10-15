const { workoutService } = require("../services");

// GET workout

const getworkout = async (req, res) => {
  const workout = await workoutService.getworkout();
  console.log(workout, "workout get success");

  res.status(200).json({
    message: "workout get success",
    data: workout,
  });
};

// ADD workout

const addworkout = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const workout = await workoutService.addworkout(body);

    if (!workout) {
      throw new Error("something went wrong");
    }
    res.status(201).json({
      message: "workout Created success",
      data: workout,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// UPDATE workout

const updateworkout = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);
    const workout = await workoutService.updateworkout(id, body);

    res.status(200).json({
      message: "workout updated success",
      data: workout,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE workout

const deleteworkout = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const workout = await workoutService.deleteworkout(id);
    if (!workout) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "workout delete success",
      data: workout,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  getworkout,
  addworkout,
  updateworkout,
  deleteworkout,
};