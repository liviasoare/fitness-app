const Workout = require("../models/workout");
const Exercise = require("../models/exercise");
const User = require("../models/user");
const mongoose = require("mongoose");

const { validationResult } = require("express-validator");

// GET ALL WORKOUTS
exports.getAllWorkouts = (req, res, next) => {
  // console.log("GET ALL");
  res.status(200).json({
    workout: [{ title: "Leg day", duration: "120" }],
  });
};

// CREATE WORKOUT
exports.postAddWorkout = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: "Validation failed!" , errors: errors.array()});
  }

  const title = req.body.title;
  const duration = req.body.duration;

  // TODO create workout in DB

  res.status(201).json({
    message: "Workout created succesfully",
    workout: {
      id: new Date().toISOString,
      title: title,
      date: new Date(),
      duration: duration,
    },
  });
};
// const workoutSchema = new Schema({
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   duration: {
//     type: Number,
//     required: true,
//   },
//   exercises: [
//     {
//       exercise: {
//         type: Schema.Types.ObjectId,
//         ref: "Exercise",
//         required: true,
//       },
//       sets: { type: Number, required: true },
//       reps: { type: Number, required: true },
//       notes: {
//         type: String,
//       },
//     },
//   ],
// });

// create workout
// exports.postAddWorkout = (req, res, next) => {
//   console.log("ADDED NEW WORKOUT");
// };

// get all workous by user id
exports.getWorkoutByUserId = (req, res, next) => {
  console.log("A TEST");
};

// get workout by name
exports.getWorkoutByName = (req, res, next) => {
  console.log("FOUND BY NAME");
};

// get workout by muscle group
exports.getWorkoutByMuscle = (req, res, next) => {
  console.log("FOUND BY MUSCLE GROUP");
};
