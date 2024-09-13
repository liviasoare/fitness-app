const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const exerciseController = require("../controllers/exercises");

router.post('/create', exerciseController.postExercise)

module.exports = router;
