const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
  //   id: {
  //     type: Schema.Types.ObjectId,
  //     required: true,
  //   },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
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

// * functions
// get all equipment
// get equipment by name

module.exports = mongoose.model("Equipment", equipmentSchema);
