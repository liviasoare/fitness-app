const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const exerciseController = require("../controllers/exercises");

router.post("/create", exerciseController.postExercise);
router.get("/all", exerciseController.getAllExercises);

// TODO
router.put("/:exerciseId", exerciseController.updateExercise)
router.delete('/:exerciseId', exerciseController.deleteExercise)

module.exports = router;
