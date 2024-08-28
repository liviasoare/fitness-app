const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutExercisesSchema = new Schema({
  // id: {
  //     type: Schema.Types.ObjectId,
  //     required: true
  // },
  workoutId: {
    type: Schema.Types.ObjectId,
    ref: "Workout",
    required: true,
  },
  exerciseId: {
    type: Schema.Types.ObjectId,
    ref: "Exercise",
    required: true,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});
