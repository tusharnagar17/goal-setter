const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET /api/goals
// @access private

const getGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc set goals
// @route POST /api/goals
// @access private

const setGoal = asyncHandler((req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: `Your text = ${req.body.text}` });
});

// @desc Update goals
// @route PUT /api/goals/:id
// @access private

const updateGoals = asyncHandler((req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
});

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access private

const deleteGoals = asyncHandler((req, res) => {
  res.status(200).json({ message: `Delete request to this ${req.params.id}` });
});

module.exports = {
  getGoal,
  setGoal,
  deleteGoals,
  updateGoals,
};
