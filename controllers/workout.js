const Workout = require("../models/workout");
const mongoose = require("mongoose");

const { validationResult } = require("express-validator");

// GET ALL WORKOUTS
exports.getAllWorkouts = (req, res, next) => {
  // console.log("GET ALL");

  Workout.find()
    .then((workouts) => {
      res
        .status(200)
        .json({ message: "Fetched all workouts", workouts: workouts });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// CREATE WORKOUT
exports.postAddWorkout = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Validation failed!");
    error.statusCode = 422;
    throw error;
  }

  const title = req.body.title;
  const duration = req.body.duration;

  const workout = new Workout({
    title: title,
    date: new Date(),
    duration: duration,
    exercises: [],
    userId: Math.floor(Math.random() * 1000),
  });

  workout
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Workout created succesfully",
        workout: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// get all workous by user id
exports.getWorkoutByUserId = (req, res, next) => {
  console.log(req.params.userId);
  const userId = req.params.userId;

  console.log("called");
  Workout.find({ userId })
    .then((workout) => {
      console.log(workout);

      if (workout?.length < 1) {
        const error = new Error("Could not find a workout.");
        error.statusCode = 404;
        throw error;
      }

      res.status(200).json({
        message: "Workout found!",
        workout: workout,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// GET workout by muscle group for a specific user
exports.getWorkoutForUserByMuscle = (req, res, next) => {
  const { userId, muscleGroup } = req.params;

  Workout.find({ userId })
    .populate("exercises.exercises")
    .then((workouts) => {
      if (!workouts || workouts.length < 1) {
        const error = new Error("No workouts found");
        error.statusCode = 404;
        throw error;
      }

      // filter workouts by muscle group within the exercises
      const filteredWorkouts = workouts.filter((workout) => {
        return workout.exercises.some((ex) =>
          ex.exercise.muscleGroup.includes(muscleGroup)
        );
      });

      if (filteredWorkouts.length < 1) {
        return res.status(404).json({
          message: "No exercises found targeting " + muscleGroup + ".",
        });
      }

      res.status(200).json({
        message: "Workouts targeting " + muscleGroup + " found!",
        workouts: workouts,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// UPDATE single workout
exports.updateWorkout = (req,res,next) => {

}

// DELETE single workout
exports.deleteWorkout = (req,res,next) => {
  
}
