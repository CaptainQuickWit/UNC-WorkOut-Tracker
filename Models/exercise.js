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
  //Not used in this version, possibly for future project
  goalMet: {
      type: Boolean,
      default: true
  },
  //Not used in this version, but for a future update may be used to add any notes about the exercise
  info : {
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