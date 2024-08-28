const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  // id: {
  //     type: Schema.Types.ObjectId,
  //     required: true
  // },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  //   muscleGroupId: {
  //     type: Schema.Types.ObjectId,
  //     required: true,
  //   },
  //   equipmentId: {
  //     type: Schema.Types.ObjectId,
  //   },
  muscleGroups: [
    {
      muscleGroupId: {
        type: Schema.Types.ObjectId,
        ref: "MuscleGroup",
        required: true,
      },
    },
  ],
  equipments: [
    {
      equipmentId: {
        type: Schema.Types.ObjectId,
        ref: "Equipment",
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

// * functions
// get all exercises
// add new exercise
// delete exercise
// get exercises by muscleGroup
// get exercises by equipment

module.exports = mongoose.model("Exercise", exerciseSchema);
