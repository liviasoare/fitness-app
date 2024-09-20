const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userImage: {
      type: Schema.Types.Buffer,
    },
    userBio: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    workouts: [{ type: Schema.Types.ObjectId, ref: "Workout" }],

    //   TODO maybe add last 5 workouts
    //   TODO maybe have preset workouts that the user specifically has
    //   TODO also have preferred gym
  },
  { timestamps: true }
);

// get all users

// find user by Id

// get all workouts for that user

module.exports = mongoose.model("User", userSchema);
