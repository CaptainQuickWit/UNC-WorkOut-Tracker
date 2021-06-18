const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ExerciseSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  Cardio : {
    type: Boolean,
    default: false
  },
  Info : {
    type: String,
    default: "Generic Exercise"
  },
  weight: {
    type : Number
  },
  reps: {
    type : Number
  },
  distance : {
    type : Number
  },
  duration : {
    type : Number,
    required : "Enter Exercise Duration"
  },
  sets: {
    type : Number
  },
  
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;