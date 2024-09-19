const Exercise = require("../models/exercise");
const mongoose = require("mongoose");

const { validationResult } = require("express-validator");

// POST exercise
exports.postExercise = (req, res, next) => {
  const exerciseTitle = req.body.title;
  const exerciseDescription = req.body.description;

  const exercise = new Exercise({
    title: exerciseTitle,
    description: exerciseDescription,
    muscleGroups: [{ muscleGroupId: Math.floor(Math.random() * 1000) }],
    equipments: [{ equipmentId: Math.floor(Math.random() * 1000) }],
  });

  exercise
    .save()
    .then((result) => {
      res.status(201).json({ message: "Exercise saved!", exercise: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// GET ALL exercises available
exports.getAllExercises = (req, res, next) => {
  Exercise.find()
    .then((exercises) => {
      res
        .status(200)
        .json({ message: "Exercises found!", exercises: exercises });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// GET SINGLE exercise by ID
exports.getExerciseBy = (req, res, next) => {};

// GET EXERCISE by name
exports.searchExercise = (req, res, next) => {};

// UPDATE exercise
exports.updateExercise = (req,res,next) => {

}

// DELETE exercise
exports.deleteExercise = (req,res,next) => {
  
}
