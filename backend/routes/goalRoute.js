const express = require("express");
const router = express.Router();
const {
  getGoal,
  setGoal,
  updateGoals,
  deleteGoals,
} = require("../controller/goalController");

router.get("/", getGoal);

router.post("/", setGoal);

router.put("/:id", updateGoals);

router.delete("/:id", deleteGoals);

module.exports = router;
