const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const userController = require("../controllers/user");

router.put("/signup", userController.createUser);

module.exports = router;
