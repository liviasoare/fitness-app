const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    // muscleGroups: [
    //   {
    //     muscleGroupId: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
    muscleGroups: [
      {
        muscleGroupId: {
          type: Number,
          required: true,
        },
      },
    ],
    // equipments: [
    //   {
    //     equipmentId: {
    //       type: Schema.Types.ObjectId,
    //       ref: "Equipment",
    //       required: true,
    //     },
    //   },
    // ],
    equipments: [
      {
        equipmentId: {
          type: Number,
          required: true,
        },
      },
    ],
    // createdAt: {
    //   type: Date,
    //   required: true,
    // },
    // updatedAt: {
    //   type: Date,
    //   required: true,
    // },
  },
  { timestamps: true }
);

// * functions
// get all exercises
// add new exercise
// delete exercise
// get exercises by muscleGroup
// get exercises by equipment

module.exports = mongoose.model("Exercise", exerciseSchema);
