const mongoose = require('mongoose');

// Workout schema
const workoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  activityType: {
    type: String,
    enum: ['cardio', 'strength', 'flexibility', 'balance', 'other'],
    required: true,
  },
  duration: {
    type: Number, // in minutes
    required: true,
  },
  caloriesBurned: {
    type: Number, // in calories
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

// Compile model from schema
const WorkoutLog = mongoose.model('WorkoutLog', workoutSchema);

module.exports = WorkoutLog;
