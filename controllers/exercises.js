const Exercise = require("../models/exercise");

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

