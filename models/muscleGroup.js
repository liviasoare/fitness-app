const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const muscleGroupSchema = new Schema({
  // id: {
  //     type: Schema.Types.ObjectId,
  //     required: true
  // },
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

// * functions
// get all muscle groups
// find by name

module.exports = mongoose.model("MuscleGroup", muscleGroupSchema);
