const express = require("express");
const router = express.Router();

const workoutsController = require("../controllers/workout");

//TEST
// GET workout/all
router.get("/", workoutsController.getAllWorkouts);

// POST workout/create
router.post("/create", workoutsController.postAddWorkout);

//
router.get("/:userId", workoutsController.getWorkoutByUserId);
router.get("/:name", workoutsController.getWorkoutByName);
router.get("/:muscle", workoutsController.getWorkoutByMuscle);

module.exports = router;
