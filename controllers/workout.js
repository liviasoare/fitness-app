const Workout = require("../models/workout");
const Exercise = require("../models/exercise");
const User = require("../models/user");
const mongoose = require("mongoose");


// create workout
exports.postAddProduct = (req, res, next) => {
  console.log("ADDED NEW WORKOUT");
};

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
