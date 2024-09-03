const mongoose = require("mongoose");
const exercise = require("./exercise");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  duration: {
    type: Number,
    required: true,
  },
  exercises: [
    {
      exercise: {
        type: Schema.Types.ObjectId,
        ref: "Exercise",
        required: true,
      },
      sets: { type: Number, required: true },
      reps: { type: Number, required: true },
      notes: {
        type: String,
      },
    },
  ],
});

// *functions
// create workout
// update workout
// delete workout
// get workout by name

module.exports = mongoose.model("Workout", workoutSchema);
