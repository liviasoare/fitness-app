const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const workoutsController = require("../controllers/workout")

//TEST
// GET workout/all
router.get("/", workoutsController.getAllWorkouts);

// POST workout/create
router.post(
  "/create",
  [body("title").trim().isLength({ min: 5 })],
  workoutsController.postAddWorkout
);

//GET workout
router.get("/:userId", workoutsController.getWorkoutByUserId);



// router.get("/name/:name", workoutsController.getWorkoutByName);
// router.get("/muscle/:muscle", workoutsController.getWorkoutByMuscle);

module.exports = router;
