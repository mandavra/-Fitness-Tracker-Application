const { goalService } = require("../services");

// GET goal

const getgoal = async (req, res) => {
  const goal = await goalService.getgoal();
  console.log(goal, "goal get success");

  res.status(200).json({
    message: "goal get success",
    data: goal,
  });
};

// ADD goal

const addgoal = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const goal = await goalService.addgoal(body);

    if (!goal) {
      throw new Error("something went wrong");
    }
    res.status(201).json({
      message: "goal Created success",
      data: goal,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// UPDATE goal

const updategoal = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);
    const goal = await goalService.updategoal(id, body);

    res.status(200).json({
      message: "goal updated success",
      data: goal,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE goal

const deletegoal = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const goal = await goalService.deletegoal(id);
    if (!goal) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "goal delete success",
      data: goal,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  getgoal,
  addgoal,
  updategoal,
  deletegoal,
};