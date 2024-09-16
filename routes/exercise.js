const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const exerciseController = require("../controllers/exercises");

router.post("/create", exerciseController.postExercise);
router.get("/all", exerciseController.getAllExercises);

module.exports = router;
