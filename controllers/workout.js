const Workout = require("../models/workout");
const Exercise = require("../models/exercise");
const User = require("../models/user");
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

// // get workout by name
// exports.getWorkoutByName = (req, res, next) => {
//   console.log("FOUND BY NAME");
// };

// // get workout by muscle group
// exports.getWorkoutByMuscle = (req, res, next) => {
//   console.log("FOUND BY MUSCLE GROUP");
// };
