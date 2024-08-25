const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  status: {
    type: String,
    required: [true, "Please provide status"],
    minlength: 3,
    maxlength: 50,
  },
  userId: {
    type: String,
    required: [true, "Please provide User ID"],
    unique: true,
  },
  collegeEmail: {
    type: String,
    required: [true, "Please provide College Email ID"],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[edu]{3}$/,
      "Please provide a valid College Email ID",
    ],
    unique: true,
  },
  collegeRollNumber: {
    type: String,
    required: [true, "Please provide College Roll Number"],
    unique: true,
  },
  numbers: {
    type: [Number],
    required: true,
    validate: {
      validator: function(arr) {
        return arr.length > 0;
      },
      message: "Array of numbers cannot be empty",
    },
  },
  alphabets: {
    type: [String],
    required: true,
    validate: {
      validator: function(arr) {
        return arr.every(char => /^[a-zA-Z]$/.test(char));
      },
      message: "Array can only contain alphabet characters",
    },
  },
  highestLowercaseAlphabet: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^[a-z]$/.test(value);
      },
      message: "Value must be a single lowercase alphabet",
    },
  },
});

module.exports = mongoose.model('User', UserSchema);
