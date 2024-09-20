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
const exerciseRoutes = require("./routes/exercise");
const authRoutes = require("./routes/auth");

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

// *routes
app.get("/", (req, res) => {
  res.send("Server working!");
});
app.use("/user", userRoutes);
app.use("/workout", workoutRoutes);
app.use("/exercise", exerciseRoutes);
app.use("/auth", authRoutes);

// *nodejs for complex stuff
// server.listen(port, port, () => {
//     console.log('Working!!!')
// });

// *error logging
app.use(errorController.get404);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// *DB connection
mongoose
  .connect(
    "mongodb+srv://admin:Andreea11!@cluster0.ptyir.mongodb.net/fitness-app?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((result) => {
    // bootstrapping the app
    app.listen(port, () => {
      console.log("Working!!!");
    });
  })
  .catch((err) => console.log(err));

//? for testing
// app.use('/static', express.static('Screenshot 2024-08-27 204000.png'))
