const mongoose = require('mongoose');

// Goal schema
const goalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  goalType: {
    type: String,
    enum: ['weekly', 'monthly'],
    required: true,
  },
  targetDuration: {
    type: Number, // total target workout time in minutes
    required: true,
  },
  targetCalories: {
    type: Number, // total target calories to burn
    required: true,
  },
  achieved: {
    type: Boolean,
    default: false,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true,
});

// Compile model from schema
const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
