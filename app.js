// const http = require("http");
const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
const errorController = require("./controllers/error");

// routes connections
const userRoutes = require("./routes/userRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

// *nodejs
// const server = http.createServer(app);

//* middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working!");
});

app.use("/user", userRoutes);
app.use("/workout", workoutRoutes);

// *nodejs
// server.listen(port, port, () => {
//     console.log('Working!!!')
// });

app.use(errorController.get404);

app.listen(port, () => {
  console.log("Working!!!");
});

// testing
// app.use('/static', express.static('Screenshot 2024-08-27 204000.png'))
