// const http = require("http");
const express = require("express");
const app = express();
const port = 8080;

const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const session = require("express-session");

const errorController = require("./controllers/error");

// routes connections
const userRoutes = require("./routes/user");
const workoutRoutes = require("./routes/workout");
const { body } = require("express-validator");

// app.use(bodyParser.urlencoded());
app.use(bodyParser.json()); //application/json

//* middleware to parse JSON bodies
app.use(express.json());

// ! TO SOLVE CORS ERRORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
  res.send("Server working!");
});

app.use("/user", userRoutes);
app.use("/workout", workoutRoutes);

// *nodejs for complex stuff
// server.listen(port, port, () => {
//     console.log('Working!!!')
// });

app.use(errorController.get404);

app.listen(port, () => {
  console.log("Working!!!");
});

// testing
// app.use('/static', express.static('Screenshot 2024-08-27 204000.png'))
