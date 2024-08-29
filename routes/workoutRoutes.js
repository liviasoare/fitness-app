const express = require("express");
const router = express.Router();

const workoutsRoutes = require("../controllers/workout");

router.get("/:userId", workoutsRoutes.getWorkoutByUserId);
router.get("/:name", workoutsRoutes.getWorkoutByName);
router.get("/:muscle", workoutsRoutes.getWorkoutByMuscle);

module.exports = router;
