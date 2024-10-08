const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const workoutsController = require("../controllers/workout");

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

// GET workouts for a specfifc user based on a selected muscle group
router.get(
  "/user/:userId/muscle/:muscleGroup",
  workoutsController.getWorkoutForUserByMuscle
);

// UPDATE workout
router.put(
  "/:workoutId",
  [body("title").trim().isLength({ min: 5 })],
  workoutsController.updateWorkout
);

// DELETE workout
router.delete("/:workoutId", workoutsController.deleteWorkout);

// TODO
// router.get("/name/:name", workoutsController.getWorkoutByName);
// router.get("/muscle/:muscle", workoutsController.getWorkoutByMuscle);

module.exports = router;
